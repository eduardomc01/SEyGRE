import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Time } from '@angular/common';


@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrls: ['./table-events.component.css'],
  providers: [NgbAlertConfig]
})

export class TableEventsComponent {


  public showSuccess: boolean;
  public staticAlertClosed;

  public _eventos: eventos[];
  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/"]);

    this.http.get<eventos[]>("api/Eventos/ObtenerEvento").subscribe(result => {

      this._eventos = result;

    });


  }



  public ObtenerIdEvento(id: number) {

    this.http.post("api/Eventos/EliminarEvento", id).subscribe(result => {

      this.mensajesAlerts(result[0]);

    });

  }


  public mensajesAlerts(op: number) {

    this.staticAlertClosed = false;

    if (op >= 1) {

      this.showSuccess = true;

    }

  }



  public close() {

    this.staticAlertClosed = true;
    this.showSuccess = false;

  }



}


interface eventos {

  a: number;
  b: string;
  c: string;
  d: Time;
  e: Date;

}
