import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from './vendedor';
import { VendedorDetail } from './vendedor-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const vendedores = 'vendedores.json';

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
}