import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { Recibo } from '../interfaces/recibo';
import { SolicitudVacaciones } from '../interfaces/solicitud-vacaciones';
import { Vacaciones } from '../interfaces/vacaciones';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent {

  recibo:Recibo;

  constructor(){
    this.recibo = {
      Empleado: {Nombre:'Jhaziel'} as Empleado,
      Solicitud: {FechaSolicitud: new Date()} as SolicitudVacaciones,
      Vacaciones: {FechaInicio: new Date(), FechaFin: new Date()} as Vacaciones
    }  
    }
}
