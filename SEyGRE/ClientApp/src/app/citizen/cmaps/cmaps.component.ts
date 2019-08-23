import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';


@Component({
  selector: 'app-cmaps',
  templateUrl: './cmaps.component.html',
  styleUrls: ['./cmaps.component.css']
})
export class CMapsComponent {

  public d: datas[];
  
  constructor(private http: HttpClient) {

    this.http.get<datas[]>("api/CentrosAcopio/ObtenerUbicacionCentros").subscribe(result => {

      console.log(result);

      this.d = result;

    });

  }

}

interface datas {

}


