import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  weather;
  city;
  country;
  constructor(private weatherService: WeatherService){

  }
  title = 'AppClima';
  ngOnInit(){
    
  }

}
