import { Component } from '@angular/core';

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
  
}
