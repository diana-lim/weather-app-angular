import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) {
    this.weatherDataService.fetchWeatherData().subscribe(data => {
      console.warn(data);
    })
   }

  ngOnInit(): void {
  }

}
