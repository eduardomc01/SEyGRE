import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbAlertConfig]
})

export class LoginComponent {

  public _usuario: string;
  public _password: string;

  public showDanger: boolean;
  public staticAlertClosed;



  constructor(private http: HttpClient, private router: Router) {

    sessionStorage.clear();

  }

  public ObtenerDatos(_usuario: string, _password: string) {

    let json = JSON.stringify({

      Usuario: this._usuario,
      Password: this._password
      
    });

    this.http.post("api/CentrosAcopio/ObtenerUsuario", JSON.parse(json)).subscribe(result => {

      this.mensajesAlerts(result[0], result);
      
    });

  }


  public mensajesAlerts(op: string, obj: object) {

    this.staticAlertClosed = false;

    if (op == undefined) {

      this.showDanger = true;

    }

    else if (obj[0].tipoUsuario == "institucion") {

      sessionStorage.setItem("idUser", obj[0].id);
      sessionStorage.setItem("nombre", obj[0].nombre);
      this.router.navigate(["/ihome"]);

    }

    else if (obj[0].tipoUsuario == "centro de acopio") {

      sessionStorage.setItem("idUser", obj[0].id);
      sessionStorage.setItem("nombre", obj[0].nombre);
      this.router.navigate(["/home"]);

    }

  }


  public close() {

    this.staticAlertClosed = true;
    this.showDanger = false;

  }


  public addCenter() {
    this.router.navigate(["/add-center"]);
  }





}


