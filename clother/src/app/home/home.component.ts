import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  meteo: string | undefined;

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit(): void {
    const meteoSub = this.apiManager.getWeather("35","139").subscribe((data) => {
      console.log(data);
      // this.meteo = data.weather[0].description;
  }
  );
  }

}



