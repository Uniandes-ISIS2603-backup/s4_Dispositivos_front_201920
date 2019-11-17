import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from '../../environments/environment'

const API_URL = environment.apiURL;
const medioPago = '/medios';

import { MedioPago } from './medio';

/**
* The service provider for everything related to medioPago
*/
@Injectable()
export class MedioPagoService {

    /**
       * Constructor of the service
       * @param http The HttpClient - This is necessary in order to perform requests
       */
    constructor(private http: HttpClient) { }

    /**
        * Returns the Observable object containing the list of books retrieved from the API
        * @returns The list of books in real time
        */
    getmedioPagos(): Observable<MedioPago[]> {
        return this.http.get<MedioPago[]>(API_URL + medioPago);
    }

    /**
    * Creates a new categoria
    * @param medio The new medio
    * @returns The medio with its new id if it was created, false if it wasn't
    */
    createMedio(medio): Observable<MedioPago> {
        return this.http.post<MedioPago>(API_URL + medioPago, medio);
    }

}



