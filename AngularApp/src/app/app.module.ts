import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
// import { FormFirstComponent } from './form-first/form-first.component';
// import { HeaderComponent} from './header/header.component';
//Esto es para poder inyectar la informacion traida desde el servicio
import { CourseService } from './course.service';
//Importacioon de cliente para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';
//Importacion de elementos para las animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
//Modulo de rutas
import {RouterModule, Routes, Router} from '@angular/router';

const appRoutes: Routes=[
  {path: 'list', component: ListTaskComponent},
  {path: 'create', component: CreateTaskComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    // FormFirstComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule //Esto es necesario para hacer peticiones http
    ,MatButtonModule,
    RouterModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
  ],
  //En roviders tenemos que poner el servicio a inyectar
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
