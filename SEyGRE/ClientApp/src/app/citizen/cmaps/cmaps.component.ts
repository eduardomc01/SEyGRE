import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cmaps',
  templateUrl: './cmaps.component.html',
  styleUrls: ['./cmaps.component.css']
})
export class CMapsComponent {

  lat: number = 19.205145;
  lng: number = -96.191294;
  public d: datas[];

  constructor(private http: HttpClient) {

    this.http.get<datas[]>("api/CentrosAcopio/ObtenerCentros").subscribe(result => {

      console.log(result);

      this.d = result;

    });

  }

}

interface datas {

}
