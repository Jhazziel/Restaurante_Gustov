import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CardComponent } from './card/card.component';
import { ReciboComponent } from './recibo/recibo.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FormsModule } from '@angular/forms';
import { SolicitudService } from './servicios/solicitud.service';
import { ReciboService } from './servicios/recibo.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    CardComponent,
    ReciboComponent,
    VacacionesComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SolicitudService,
    ReciboService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
