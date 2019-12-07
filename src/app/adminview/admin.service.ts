import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Marca } from '../marca/marca';
import { Categoria } from '../categoria/categoria';
import { Dispositivo } from '../dispositivo/dispositivo';
const API_URL = environment.apiURL;
const marcas = '/marcas';
const categorias = '/categorias';
const dispositivos  = '/dispositivos';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AdminService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, //private roleService: NgxRolesService, private permissionsService: NgxPermissionsService,
        private http: HttpClient) { }

    start (): void {
        //this.permissionsService.flushPermissions();
        //this.roleService.flushRoles();
        //this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
    }
    createMarca(marca): Observable<Marca> {
        return this.http.post<Marca>(API_URL + marcas, marca);
    }  
    createCategoria(categoria): Observable<Categoria> {
        return this.http.post<Categoria>(API_URL + categorias, categoria);
    }  
    createDispositivo(dispositivo): Observable<Dispositivo> {
        return this.http.post<Dispositivo>(API_URL + dispositivos, dispositivo);
    }
}