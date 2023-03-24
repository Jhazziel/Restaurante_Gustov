import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;  //"?" sirve para definir que un valor puede ser nulo
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Mi primer App en Angular';
  public ArregloTarjetas:Tarjeta[]=[];

  ngOnInit(): void {
    
    this.ArregloTarjetas = [
      {titulo: 'Video 1', subtitulo:'subtitulo video 1'},
      {titulo: 'Video 2', subtitulo:'subtitulo video 2'},
      {titulo: 'Video 3', subtitulo:'subtitulo video 3'}
    ]
  }
}
