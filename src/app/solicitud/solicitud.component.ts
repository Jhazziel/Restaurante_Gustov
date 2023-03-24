import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { SolicitudVacaciones } from '../interfaces/solicitud-vacaciones';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitudVacaciones:SolicitudVacaciones;

  constructor(){
    this.solicitudVacaciones = {} as SolicitudVacaciones;
  }

  Registrar():void{
    console.log(this.solicitudVacaciones);
  }
}
