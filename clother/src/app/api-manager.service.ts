import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(private http: HttpClient) { }

  getWeather(lat:string,lon: string){
    const key = "1815b0a656c7286b3daeb12987eedef1";
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
  }
}
