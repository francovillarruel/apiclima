import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: any;
  apiKey = '3bb47a960ca8c42dbe91b11388aa2c79'; // Reemplaza con tu clave de API de OpenWeatherMap
  cityName: string = '';

  constructor(private http: HttpClient) {}

  getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}`;

    this.http.get(apiUrl).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error) => {
        console.error('Error al obtener datos del clima:', error);
      }
    );
  }
}
