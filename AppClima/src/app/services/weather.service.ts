import { Injectable } from '@angular/core';
//Llamamos el http
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey="d6e5046420392848b6228c8acaa9715e";
  URI: string = '';
  constructor(private httpClient: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&q=`;
   }


   getWeather(city: string,country: string){
    return this.httpClient.get(`${this.URI}${city},${country}`);
   }
}
