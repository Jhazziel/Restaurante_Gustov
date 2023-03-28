import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CardComponent } from './card/card.component';
import { ReciboComponent } from './recibo/recibo.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudService } from './servicios/solicitud.service';
import { ReciboService } from './servicios/recibo.service';
import { HttpClientModule } from '@angular/common/http';

//Angular Material Modules ------------------------------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'  
//-------------------------------------------------------------------------------

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
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    SolicitudService,
    ReciboService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
