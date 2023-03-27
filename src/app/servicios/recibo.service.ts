import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";
import { Recibo } from "../interfaces/recibo";
import { Solicitud } from "../interfaces/solicitud";

@Injectable({ providedIn: 'root'})
export class ReciboService {

   apiurl:string = 'api/Solicitud/'; 
   constructor(private _http: HttpClient){
      
   }

   getRecibo(id: number): Observable<Solicitud> {
      const params: HttpParams = new HttpParams().append('id', id.toString());
      return this._http.get<Solicitud>(this.apiurl+'getSolicitud', {params});
   }
   // generarRecibo()
}
