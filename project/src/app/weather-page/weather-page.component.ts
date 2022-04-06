import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  weatherData: any;

  constructor(private weatherDataService: WeatherDataService) {
    // this.weatherDataService.fetchWeatherData().subscribe(data => {
    //   console.warn(data);
    // })
   }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.weatherData);
  }

  getWeatherData(){
    // fetch('https://api.weather.gov/points/{latitude},{longitude}')
    fetch('https://api.weather.gov/points/47.802,-122.3775')
      .then(response => response.json())
      .then(data => {
        this.setWeatherData(data);
        // console.log(data.geometry.coordinates);
        console.log(data.properties.relativeLocation.properties.state);
        console.log(data.properties.forecast);
      })
  }

  setWeatherData(data) {
    this.weatherData = data;
  }

}
