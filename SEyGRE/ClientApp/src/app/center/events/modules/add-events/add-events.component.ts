import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent {

  public _nombre: string;
  public _organizador: string;
  public _fecha: Date;
  public _hora: Time;

  public _lat: DoubleRange;
  public _lng: DoubleRange;

  public markers: marker[] = [];

  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/"]);

  }


  ObtenerDatos() {

    let json = JSON.stringify({

      nombre: this._nombre,
      organizador: this._organizador,
      fecha: this._fecha,
      horario: this._hora,
      latitud: this._lat,
      longitud: this._lng,
      idCentroAcopio: this.idUser


    });

    console.log(json);


    this.http.post("api/Eventos/InsertarEventos", JSON.parse(json)).subscribe(() => { });

  }


  public mapClicked($event: MouseEvent) {
    this.markers.push({

      lat: $event.coords.lat,
      lng: $event.coords.lng

    });

    this._lat = $event.coords.lat;
    this._lng = $event.coords.lng;

  }


  public markerRightClick($event: MouseEvent) {
    this.markers.pop();
    this._lat = 0.0;
    this._lng = 0.0;

  }




}



interface marker {

  lat: number;
  lng: number;

}
