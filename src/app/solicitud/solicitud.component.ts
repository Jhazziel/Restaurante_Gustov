import { Component } from '@angular/core';
import { Solicitud } from '../interfaces/solicitud';
import { SolicitudService } from '../servicios/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  solicitudVacaciones:Solicitud;

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
