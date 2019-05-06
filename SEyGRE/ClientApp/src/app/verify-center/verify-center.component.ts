import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-center',
  templateUrl: './verify-center.component.html',
  styleUrls: ['./verify-center.component.css']
})
export class VerifyCenterComponent{

  public _centro: centro[]

  constructor(private http: HttpClient) {

    this.http.get<centro[]>("api/CentrosAcopio/ObtenerCentrosPendientes").subscribe( result => {

      this._centro = result;

    });

  }

  public seleccionarCentro(id: number, op: boolean) {

    if (op) {

      console.log(id);

      this.http.post("api/CentrosAcopio/AceptarPeticionCentro",id).subscribe();
      
    } else {

      console.log(id);

      this.http.post("api/CentrosAcopio/EliminarPeticionCentro",id).subscribe();

    }

  }

}


interface centro {
  a: number;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
}
