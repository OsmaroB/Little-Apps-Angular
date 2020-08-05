import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FormFirstComponent } from './form-first/form-first.component';
//Esto es para poder inyectar la informacion traida desde el servicio
import { CourseService } from './course.service';
//Importacioon de cliente para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';
//Importacion de elementos para las animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FormFirstComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule //Esto es necesario para hacer peticiones http
    ,MatButtonModule
  ],
  //En roviders tenemos que poner el servicio a inyectar
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
