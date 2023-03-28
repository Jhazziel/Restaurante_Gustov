import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Vacaciones } from '../interfaces/vacaciones';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  vacaciones: Vacaciones;
  
  constructor(){
    this.vacaciones = {} as Vacaciones;
  }

  Registrar():void{
    console.log(this.vacaciones);
  }

}
