import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dispositivo } from "./dispositivo";
import { DispositivoDetail } from "./dispositivo-detail";
import { HttpClient } from "@angular/common/http";

const API_URL = environment.apiURL;
const dispositivos = "/dispositivos";

@Injectable()
export class DispositivoService {

    constructor(private http: HttpClient) { }

    getDispositivos(): Observable<Dispositivo[]> {
        return this.http.get<Dispositivo[]>(API_URL + dispositivos);
    }

    getDispositivoDetail(dispositivoId): Observable<DispositivoDetail> {
        return this.http.get<DispositivoDetail>(API_URL + dispositivos + "/" + dispositivoId);
    }

    createDispositivo(dispositivo): Observable<Dispositivo> {
        return this.http.post<Dispositivo>(API_URL + dispositivos, dispositivo);
    }
}