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

  public _componentes: any;
  public _busqueda: string;

  public showSuccess: boolean;
  public staticAlertClosed;


  public consulta: boolean;
  public inexistente: boolean;

  public idUser:string = sessionStorage.getItem("idUser");
  public showSave: boolean = true;

  paginaPrincipal: number = 1;

  constructor(private http: HttpClient, private router: Router) {
    this.inexistente = true;
    this.consulta = true;

  }


  public obtenerComponentes(): void {

    let json = JSON.stringify({

      id: this.idUser,
      busqueda: this._busqueda

    });

   
    this.http.post<any>("api/Componentes/ObtenerBusquedaPersonalizada", JSON.parse(json)).subscribe(result => {


        if (result.length != 0) {

          this._componentes = result;
          this.inexistente = true;
          this.consulta = false;


        } else {

          this.inexistente = false;
          this.consulta = false;
        }
        
    });
  }


  public eliminarComponente(id: number):void {

    this.http.post<number>("api/Componentes/EliminarComponente", id).subscribe(result => {

      this.obtenerComponentes();
      this.mensajesAlerts(result);

    });

  }

  public modificarPersonal(_id: number, nombre: string, peso: number, clasificacion: number, fecha: Date): void {

    var json = JSON.stringify({

      Id: _id,
      Nombre: nombre,
      Peso: peso,
      IdClasificacion: clasificacion,
      Fecha: fecha,
      
    });

    this.http.post<any>("api/Componentes/ModificarComponente", JSON.parse(json)).subscribe(result => {

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


interface componentes {

  a: number;
  b: string;
  c: number;
  d: number;
  e: string; /*este era date por la fecha*/
  f: number;
  g: string;

}
