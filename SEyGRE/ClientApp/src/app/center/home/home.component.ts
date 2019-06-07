import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbAlertConfig]
})

export class HomeComponent {

  public showSuccess: boolean;
  public staticAlertClosed;
  public nombre: string;

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);
    
    this.nombre = sessionStorage.getItem("nombre");
    this.mensajesAlerts();

  }


  public mensajesAlerts() {

    this.staticAlertClosed = false;
    this.showSuccess = true;

  }



  public close() {

    this.staticAlertClosed = true;
    this.showSuccess = false;
    this.closeSession();

  }

  public closeSession() {

    sessionStorage.clear();
    this.router.navigate(["/Login"]);

  }

}
