import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Time } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { Timestamp } from 'rxjs';
import { TimeDisplayFormat } from 'chart.js';


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
  public idUser: string = sessionStorage.getItem("idUser");

  public consulta: boolean;
  public showSave: boolean = true;
  public inexistente: boolean;
  public _busqueda: string;

  public i: number = 0;

  constructor(private http: HttpClient, private router: Router) {

    this.inexistente = true;
    this.consulta = true;

    this.obtenerEvento();

  }


  public obtenerEvento(): void {

    this.http.get<eventos[]>("api/Eventos/ObtenerEvento?id=" + this.idUser).subscribe(result => {

      console.log(result);

      this._eventos = result;

    });

  }



  public eliminarEvento(id: number) {

    this.http.post<number>("api/Eventos/EliminarEvento", id).subscribe(result => {
      
      this.obtenerEventoPersonalizado();

    });

  }



  public obtenerEventoPersonalizado(): void {

    let json = JSON.stringify({

      id: this.idUser,
      busqueda: this._busqueda

    });


    this.http.post<eventos[]>("api/Eventos/ObtenerBusquedaPersonalizada", JSON.parse(json)).subscribe(result => {

      if (result.length != 0) {

        this._eventos = result;
        this.inexistente = true;
        this.consulta = false;


      } else {

        this.inexistente = false;
        this.consulta = false;
      }

    });
  }




  public modificarEvento(_id: number, nombre: string, organizador: string, horario: Time, fecha: Date, estatus: number): void {

    var json = JSON.stringify({

      Id: _id,
      Nombre: nombre,
      Organizador: organizador,
      Horario: horario,
      Fecha: fecha,
      IdEstatus: estatus


    });

    this.http.post<eventos[]>("api/Eventos/ModificarEvento", JSON.parse(json)).subscribe(result => {

      //this._personal = result;
      //this.obtenerPersonal();

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

  d: string;   /* antes Time por el tiempo */
  e: string; /* antes Date por la fecha */

  f: number; /* idEstatus en int id */
  g: string; /* idEstatus en string - nombre*/

}
