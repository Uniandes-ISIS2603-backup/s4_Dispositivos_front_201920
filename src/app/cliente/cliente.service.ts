import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./cliente";
import { ClienteDetail } from "./cliente-detail";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { Administrador } from './administrador';

const API_URL = environment.apiURL;
const clientes = "/clientes";

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(API_URL + clientes);
  }

  getClienteDetail(clienteId): Observable<ClienteDetail> {
    return this.http.get<ClienteDetail>(API_URL +clientes+'/'+clienteId);
  }
  getUsuario(clienteUser): Observable<Cliente> {
    return this.http.get<Cliente>(API_URL +clientes+'/user/'+clienteUser);
  }

  getAdministrador(idAdmin):Observable<Administrador>
  {
    return this.http.get<Administrador>(API_URL +'/administradores/'+idAdmin);
  }
      /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
   createCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(API_URL + clientes, cliente);
}
}
