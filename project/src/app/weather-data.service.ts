import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestEndpoint } from 'src/environments/environment';
import { WeatherData } from './weather-page/weather.model';
import { Weather } from './weather-page/weather.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  weatherData: WeatherData[];

  constructor(private http: HttpClient) { }

  fetchWeatherData() {
    return this.http.get<WeatherData[]>(`${RestEndpoint.weatherData}`).pipe(
      map(data => {
        const weatherArray: Array<any> = [];
        for(let location in data) {
          if(data.hasOwnProperty(location)) {
            weatherArray.push(data[location]);
          }
        }
        return weatherArray;
      })
    )
  }
}
