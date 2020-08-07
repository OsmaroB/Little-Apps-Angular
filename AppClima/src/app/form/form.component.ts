import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //HACER EL COMPONENTE @Output
  @Output() sendCity = new EventEmitter();
  @Output() sendCountry = new EventEmitter();
  @Output() sendWheater = new EventEmitter();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName,countryCode)
    .subscribe(
      res => {
        this.sendWheater.emit(res);
      },
      err => console.log(err)
    )
  }
  submitLocation(cityName: HTMLInputElement,countryCode: HTMLInputElement){
    if(cityName.value && countryCode.value){
      this.getWeather(cityName.value,countryCode.value);
      //ELEMENTOS DE EMITIR AL PADRE
      this.sendCity.emit(cityName.value);
      this.sendCountry.emit(countryCode.value);
    }else{
      alert('Please Inserte some values');
    }
    cityName.value = '';
    countryCode.value = '';
    cityName.focus();
    return false;
  }
}
