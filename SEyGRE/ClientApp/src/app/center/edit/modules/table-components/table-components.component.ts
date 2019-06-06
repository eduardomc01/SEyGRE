import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-components',
  templateUrl: './table-components.component.html',
  styleUrls: ['./table-components.component.css'],
  providers: [NgbAlertConfig]
})

export class TableComponentsComponent {

  public _componentes: componentes[];
  public _busqueda: string;

  public showSuccess: boolean;
  public staticAlertClosed;

  private idUser:string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    let json = JSON.stringify({
      id: this.idUser
    });

    this.http.post<componentes[]>("api/Componentes/ObtenerResiduos",JSON.parse(json)).subscribe(result => {

      this._componentes = result;

    });

  }

  public ObtenerDatos() {

    let json = JSON.stringify({
      nombre: this._busqueda
    });

    this.http.post<componentes[]>("api/Componentes/ObtenerBusquedaPersonalizada", JSON.parse(json)).subscribe(result => {

      this._componentes = result;

    });
  }

  public ObtenerIdComponente(id: number) {

    this.http.post("api/Componentes/EliminarComponente", id).subscribe(result => {

      this.mensajesAlerts(result);

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


interface componentes {

  a: number;
  b: string;
  c: number;
  d: string;
  e: string;

}
