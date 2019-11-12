import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Marca} from './marca';
import {MarcaDetail} from './marca-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const marcas = '/marcas';


/**
* The service provider for everything related to marcas
*/
@Injectable()
export class MarcaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of marcas retrieved from the API
    * @returns The list of marcas in real time
    */
    getMarcas(): Observable<Marca[]> {
        return this.http.get<Marca[]>(API_URL + marcas);
    }

    /**
    * Creates a new marca
    * @param marca The new marca
    * @returns The marca with its new id if it was created, false if it wasn't
    */
    createMarca(marca): Observable<MarcaDetail> {
        return this.http.post<MarcaDetail>(API_URL + marcas, marca);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getMarcaDetail(marcaId): Observable<MarcaDetail> {
        return this.http.get<MarcaDetail>(API_URL + marcas + '/' + marcaId);
    }

    /**
        * Updates a new marca
        * @param marca The updated marca
        * @returns The updated marca
        */
    updateMarca(marca): Observable<MarcaDetail> {
        return this.http.put<MarcaDetail>(API_URL + marcas + '/' + marca.id, marca);
    }
    
    /**
    * Deletes a marca
    * @param marcaId The marca's id
    * @returns True if the marca was deleted, false otherwise
    */
    deleteMarca(marcaId): Observable<MarcaDetail> {
        return this.http.delete<MarcaDetail>(API_URL + marcas + '/' + marcaId);
    }
}
