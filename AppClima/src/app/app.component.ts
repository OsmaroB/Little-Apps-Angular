import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private weatherService: WeatherService){

  }
  title = 'AppClima';
  ngOnInit(){
    this.weatherService.getWeather('london','uk')
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
  submitLocation(cityName,countryCode){
    console.log(cityName,countryCode);
    cityName.value = '';
    countryCode.value = '';
    return false;
  }
}
