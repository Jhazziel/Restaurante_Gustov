import { Component } from '@angular/core';
import { Vacaciones } from '../interfaces/vacaciones';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent {

  vacaciones: Vacaciones;

  constructor(){
    this.vacaciones = {} as Vacaciones;
  }

  Registrar():void{
    console.log(this.vacaciones);
  }

}
