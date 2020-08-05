import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFirstComponent } from './form-first/form-first.component';
//Esto es para poder inyectar la informacion traida desde el servicio
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    FormFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  //En roviders tenemos que poner el servicio a inyectar
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
