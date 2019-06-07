import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cmaps',
  templateUrl: './cmaps.component.html',
  styleUrls: ['./cmaps.component.css']
})
export class CMapsComponent {

  //19.164664, -96.113745 recolectron
  //19.161593, -96.109658 ilustre
  //19.160326, -96.114990 mocambo

  public d: datas[];

  constructor(private http: HttpClient) {

    this.http.get<datas[]>("api/CentrosAcopio/ObtenerCentros").subscribe(result => {

      console.log(result);

      this.d = result;

    });

  }

}

interface datas { }
