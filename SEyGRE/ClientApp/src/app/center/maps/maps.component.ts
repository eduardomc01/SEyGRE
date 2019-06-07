import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  //19.205145, -96.191294
  title: string = 'Centro de acopio Rio medio';
  lat: number = 19.205145;
  lng: number = -96.191294;

  constructor(private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

  }


}
