import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Comprobante} from './comprobante';
import {ComprobanteDetail} from './comprobante-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const comprobantes = '/comprobantes';


/**
* The service provider for everything related to comprobantes
*/
@Injectable()
export class ComprobanteService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of comprobantes retrieved from the API
    * @returns The list of comprobantes in real time
    */
    getComprobantes(): Observable<Comprobante[]> {
        return this.http.get<Comprobante[]>(API_URL + comprobantes);
    }

    /**
    * Creates a new comprobante
    * @param comprobante The new comprobante
    * @returns The comprobante with its new id if it was created, false if it wasn't
    */
    createComprobante(comprobante): Observable<ComprobanteDetail> {
        return this.http.post<ComprobanteDetail>(API_URL + comprobantes, comprobante);
    }

    /**
    * Returns the Observable object with the details of an comprobante retrieved from the API
    * @returns The comprobantes details
    */
    getComprobanteDetail(comprobanteId): Observable<ComprobanteDetail> {
        return this.http.get<ComprobanteDetail>(API_URL + comprobantes + '/' + comprobanteId);
    }

    /**
    * Updates a new comprobante
    * @param comprobante The updated comprobante
    * @returns The updated comprobante
    */
    updateComprobante(comprobante): Observable<ComprobanteDetail> {
        return this.http.put<ComprobanteDetail>(API_URL + comprobantes + '/' + comprobante.id, comprobante);
    }
}
