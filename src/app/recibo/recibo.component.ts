import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { Recibo } from '../interfaces/recibo';
import { Solicitud } from '../interfaces/solicitud';
import { Vacaciones } from '../interfaces/vacaciones';
import { ReciboService } from '../servicios/recibo.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent {

  recibo:Recibo;

  constructor(private _recibo: ReciboService){
    this.recibo = ({} as Recibo);
  }

  getRecibo(): void{
    this._recibo.getRecibo(1);
  } 
}
