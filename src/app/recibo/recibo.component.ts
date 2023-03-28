import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { Recibo } from '../interfaces/recibo';
import { Solicitud } from '../interfaces/solicitud';
import { Vacaciones } from '../interfaces/vacaciones';
import { ReciboService } from '../servicios/recibo.service';

interface EntityEmpleado {
  value: string;
  nombre: string;
}

export interface PeriodicElement {
  fechaSolicitud: string;
  IdRecibo: number;
  fechaInicio: string;
  fechaFin: string;
  Aceptado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {IdRecibo: 1, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 2, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 3, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 4, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Denegado'},
  {IdRecibo: 5, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 6, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 7, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Denegado'},
  {IdRecibo: 8, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 9, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
  {IdRecibo: 10, fechaSolicitud: '22/03/23', fechaInicio: '25/12/23', fechaFin: '03/01/24', Aceptado: 'Aceptado'},
];

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent {

  empleados: EntityEmpleado[] = [
    {value: '1', nombre: 'Mario'},
    {value: '2', nombre: 'Jhaziel'},
    {value: '3', nombre: 'Henry'},
  ];

  displayedColumns: string[] = ['IdRecibo', 'fechaSolicitud', 'fechaInicio', 'fechaFin', 'Aceptado'];
  dataSource = ELEMENT_DATA;

  recibo:Recibo;

  constructor(private _recibo: ReciboService){
    this.recibo = ({} as Recibo);
  }

  GetRecibo(): void{
    this._recibo.GetRecibo(1);
  } 
}
