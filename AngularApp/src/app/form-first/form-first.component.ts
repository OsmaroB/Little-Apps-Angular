import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {
  status = "Form not submit";
  defaultName = "Osmaro";
  displayPassword = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  onSendForm(email){
    this.status = "El formulario a sido enviado con exito";
    console.log(email)
  }
  onDefaultForm(nombre){
    this.status = "Form nor submit";
    this.defaultName= "Osmaro";
    nombre.value= this.defaultName;
  }

}
