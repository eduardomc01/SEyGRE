import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imaps',
  templateUrl: './imaps.component.html',
  styleUrls: ['./imaps.component.css'],
  providers: [NgbAlertConfig]
})
export class IMapsComponent {

  //19.205145, -96.191294
//  title: string = 'Centro de acopio Rio medio';
  lat: number = 19.205145;
  lng: number = -96.191294;

  public d: datas[];

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);


    this.http.get<datas[]>("api/CentrosAcopio/ObtenerUbicacionCentros").subscribe(result => {

      console.log(result);

      this.d = result;


    });

  }


}


interface datas {

}
