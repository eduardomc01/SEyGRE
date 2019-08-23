import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent {

  public _usuario: string;
  public _password: string;

  public _nombre: string;
  public _correo: string;

  public _imagen: string;
  public _direccion: string;

  public title: string = "CENTRO";
  public _lat: DoubleRange;
  public _lng: DoubleRange;

  public markers: marker[] = [];


  constructor(private http: HttpClient, private router: Router) { }

  ObtenerDatos() {

    let json = JSON.stringify({

      nombre: this._nombre,
      imagen: this._imagen,
      usuario: this._usuario,
      correo: this._correo,
      password: this._password,
      latitud: this._lat,
      longitud: this._lng,
      idEstatus: 3,    /* porque comienzan como pendientes */
      idTipoUsuario: 2

    });

    /*
    let json2 = JSON.stringify({

      usuario: this._usuario,
      contraseña: this._password,
      idEstatus: 3 porque comienzan como pendientes 

    }); */


    this.http.post("api/CentrosAcopio/InsertarCentros", JSON.parse(json)).subscribe(() => { });

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



  public login() {
    this.router.navigate(["/Login"]);
  }


}



interface marker {

  lat: number;
  lng: number;

}
