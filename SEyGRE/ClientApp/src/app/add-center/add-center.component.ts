import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent {

  public _nombre: string;
  public _usuario: string;
  public _imagen: string;
  public _password: string;
  public _direccion: string;


  constructor(private http: HttpClient) { }

  ObtenerDatos() {

    let json = JSON.stringify({

      nombre: this._nombre,
      usuario: this._usuario,
      password: this._password,
      imagen: this._imagen,
      idEstatus: 3 /* porque comienzan como pendientes */


    });

    this.http.post("api/CentrosAcopio/InsertarCentros", JSON.parse(json)).subscribe(() => { });

  }

}
