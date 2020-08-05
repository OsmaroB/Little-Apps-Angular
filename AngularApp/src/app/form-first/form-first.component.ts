import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Se importa el servicio
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {
  status = "Form not submit";
  defaultName = "Osmaro";
  displayPassword = false;
  lightStatus = "GREEN";
  names = ['Osmaro', "Kevin", "Benjamin", "Chepe"]
  //Este decorador permite utilizar los elemetos traidos del componente PADRE
  // @Input() parentDataToChild;
  @Input('parentDataToChild') messageFrom

  //HACER EL COMPONENTE @Output
  @Output() childEvent = new EventEmitter();

  //Variable para consumir informacion importada desde el servicio
  course = [];
  errorMessage= "";
  //En el constructor se importa lo que se hara en CourseService
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // this.course = this.courseService.getCourses();
    this.courseService.getCourses().subscribe(data => this.course=data, error=>this.errorMessage = error);
    
  }

  onSendForm(email){
    this.status = "El formulario a sido enviado con exito";
    console.log(email)
    console.log(this.course)
  }
  onDefaultForm(nombre){
    this.status = "Form nor submit";
    this.defaultName= "Osmaro";
    nombre.value= this.defaultName;
  }

  onSendEvent(){
    this.childEvent.emit("Enviando desde hijo hasta padre");
  }
}
