import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-center',
  templateUrl: './verify-center.component.html',
  styleUrls: ['./verify-center.component.css'],
  providers: [NgbAlertConfig]
})
export class VerifyCenterComponent{


  public showSuccess: boolean;
  public showDanger: boolean;
  public staticAlertClosed;

  public _centro: centro[]

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    this.http.get<centro[]>("api/CentrosAcopio/ObtenerCentrosPendientes").subscribe(result => {

      try {

        console.log(result)

        this._centro = result;

        this.mensajesAlerts(result.length);

      } catch (e) {

        console.log(e);

      }

    

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


  public mensajesAlerts(op: number) {

    this.staticAlertClosed = false;

    if (op >= 1) {

      this.showSuccess = true;

    } else {

      this.showDanger = true;

    }

  }


  public close() {

    this.staticAlertClosed = true;
    this.showSuccess = false;
    this.showDanger = false;

  }

  

}


interface centro {
  a: number;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;


}
