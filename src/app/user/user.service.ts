import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cliente } from '../cliente/cliente';
import { Observable } from 'rxjs';
import { ClienteService } from '../cliente/cliente.service';
import { Administrador } from '../cliente/administrador';
const API_URL = environment.apiURL;
const clientes = '/clientes';
/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class UserService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private administrador: Administrador, private cliente: Cliente, private clienteService: ClienteService, private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService, private http: HttpClient) { }

    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role === 'VEND') {
            this.setAdministratorRole();
        }
        else {
            this.setClientRole();
        }
    }

    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClientRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['leave_review']);
        localStorage.setItem('role', 'CLIENT');
    }

    signUp(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

    setAdministratorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    setVendedorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('VEND', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'VEND');
    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(role): void {
        if (role === 'ADMIN') {
            
                this.setAdministratorRole();
            }
        else if (role === 'CLIENT') {
            
                this.setClientRole()
            }
        this.router.navigateByUrl('/dispositivos/list');
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}