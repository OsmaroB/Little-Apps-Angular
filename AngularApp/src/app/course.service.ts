import { Injectable } from '@angular/core';
//EL httpClient sirve para traer informacion y llevarla
//HttpErrorResponse sirve para manejar errores
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//Importamos el Icourse que sirve para ejetutar el onbservador
import { ICourse } from './course';
//Traemos el observable pata manipularlo
import { Observable } from 'rxjs';
//Sirve para manejar los errores en conjunto con el HttpErrorResponse
import { catchError } from 'rxjs/operators';
//Manejamos para un error
import { throwError as ObservableThrowError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = 'assets/data/courses.json';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]>{

    //Este http regresa un observable
    return this.http
        .get<ICourse[]>(this.url)
        //Funcion separada a componente o servicio
        .pipe(
          catchError(this.errorHandler)
        )
    // return[
    // ]
  }
  errorHandler(error: HttpErrorResponse){
    return ObservableThrowError(error.message)
  }
}
