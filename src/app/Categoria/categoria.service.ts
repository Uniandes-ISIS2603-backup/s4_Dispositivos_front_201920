import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {Categoria} from './categoria';
import {CategoriaDetail} from './categoria-detail';

import { Observable } from "rxjs";

import {environment} from '../../environments/environment'

const API_URL = environment.apiURL;
const categorias = '/categorias';


/**
* The service provider for everything related to Categoria
*/
@Injectable()
export class CategoriaService
{
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) {}

       /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
   getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(API_URL + categorias);
    }

        /**
    * Creates a new categoria
    * @param categoria The new categoria
    * @returns The categoria with its new id if it was created, false if it wasn't
    */
   createCategoria(categoria): Observable<CategoriaDetail> {
    return this.http.post<CategoriaDetail>(API_URL + categorias, categoria);
    }

        /**
    * Returns the Observable object with the details of an categoria retrieved from the API
    * @returns The categoria details
    */
   getCategoriasDetail(categoriaId): Observable<CategoriaDetail> {
    return this.http.get<CategoriaDetail>(API_URL + categorias + '/' + categoriaId);
}
}