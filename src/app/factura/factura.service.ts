import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Factura} from './factura';
import {FacturaDetail} from './factura-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const facturas = '/facturas';


/**
* The service provider for everything related to facturas
*/
@Injectable()
export class FacturaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of facturas retrieved from the API
    * @returns The list of facturas in real time
    */
    getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL + facturas);
    }

    /**
    * Creates a new factura
    * @param factura The new factura
    * @returns The factura with its new id if it was created, false if it wasn't
    */
    createFactura(factura): Observable<FacturaDetail> {
        return this.http.post<FacturaDetail>(API_URL + facturas, factura);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getFacturaDetail(facturaId): Observable<FacturaDetail> {
        return this.http.get<FacturaDetail>(API_URL + facturas + '/' + facturaId);
    }

    /**
        * Updates a new factura
        * @param factura The updated factura
        * @returns The updated factura
        */
    updateFactura(factura): Observable<FacturaDetail> {
        return this.http.put<FacturaDetail>(API_URL + facturas + '/' + factura.id, factura);
    }
    
    /**
    * Deletes a factura
    * @param facturaId The factura's id
    * @returns True if the factura was deleted, false otherwise
    */
    deleteFactura(facturaId): Observable<FacturaDetail> {
        return this.http.delete<FacturaDetail>(API_URL + facturas + '/' + facturaId);
    }
}
