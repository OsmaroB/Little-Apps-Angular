import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  //Esto pueden ser arrays funciones datos o componentes
  dataToChildFromParent = "Este mensaje es para Form Component desde App Component";
  message= "";
}
