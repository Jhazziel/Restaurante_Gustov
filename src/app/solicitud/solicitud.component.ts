import { Component } from '@angular/core';
import { Solicitud } from '../interfaces/solicitud';
import { SolicitudService } from '../servicios/solicitud.service';

interface EntityEmpleado {
  value: string;
  nombre: string;
}

interface EntitySucursal {
  value: string;
  nombre: string;
}

interface EntityDuracion {
  value: string;
  nombre: string;
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitudVacaciones:Solicitud;

  empleados: EntityEmpleado[] = [
    {value: '1', nombre: 'Mario'},
    {value: '2', nombre: 'Jhaziel'},
    {value: '3', nombre: 'Henry'},
  ];

  sucursales: EntitySucursal[] = [
    {value: '1', nombre: 'Sucursal 1'},
    {value: '2', nombre: 'Sucursal 2'},
    {value: '3', nombre: 'Sucursal 3'},
  ];

  duraciones: EntityDuracion[] = [
    {value: '1', nombre: '10 dias'},
    {value: '2', nombre: '20 dias'},
    {value: '3', nombre: '30 dias'},
  ];

  constructor(private _solicitud: SolicitudService){

    this.solicitudVacaciones = {} as Solicitud;
  }

  Registrar():void{
    console.log(this.solicitudVacaciones);
    this._solicitud.getSolicitud(3).subscribe(p => {
      this.solicitudVacaciones = p;
    });
  }
}
