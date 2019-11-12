import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from './vendedor';
import { VendedorDetail } from './vendedor-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const vendedores = "/vendedores";

@Injectable()
export class VendedoresService {

  constructor(private http: HttpClient) { }    
  
    getVendedores() : Observable<Vendedor[]> 
    {
        return this.http.get<Vendedor[]>(API_URL + vendedores);
    }

    getVendedorDetail(vendedorCedula) : Observable<VendedorDetail> 
    {
        return this.http.get<VendedorDetail>(API_URL + 'vendedor' + vendedorCedula + ".json");
    }

    createVendedor(vendedor): Observable<Vendedor> {
        return this.http.post<Vendedor>(API_URL + vendedores, vendedor);
    }
}