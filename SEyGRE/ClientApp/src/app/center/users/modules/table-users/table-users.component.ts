import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddUsersComponent } from "../add-users/add-users.component";

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
  providers: [NgbAlertConfig]
})
export class TableUsersComponent {

  //@ViewChild(AddUsersComponent) users: AddUsersComponent;
  /*

  id: number;  
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _direccion: string;
  private _cargo: number;
  */

  public showSuccess: boolean;
  public showDanger: boolean;
  public staticAlertClosed;
  public _menssage: string;

  public _personal: personal[] = [];

  private idUser: string = sessionStorage.getItem("idUser");

  //public consulta: boolean;
  public inexistente: boolean;
  public showSave: boolean = true;
  public _busqueda: string;

  paginaPrincipal: number = 1;

  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/Login"]);

    this.inexistente = true;
    //this.consulta = true;
    //this.showSave = false;
    this.obtenerPersonal();

  }

  public obtenerPersonal(): void {

    this.http.get<personal[]>("api/Personal/ObtenerPersonal?id=" + this.idUser).subscribe(result => {

      this._personal = result;

      //this.mensajesAlerts(result.length);

    });

  }



  public eliminarPersonal(id: number): void {

    this.http.post<number>("api/Personal/EliminarPersonal", id).subscribe(result => {

      //this.mensajesAlerts(result);

      this.obtenerEspecificoPersonal();

    });

  }


  public modificarPersonal(_id: number, nombre: string, apellidos: string, edad: number, direccion: string, cargo: number): void {

    var json = JSON.stringify({

      Id: _id,
      Nombre: nombre,
      Apellidos: apellidos,
      Edad: edad,
      Direccion: direccion,
      IdCargo: cargo

    });

    this.http.post<personal[]>("api/Personal/ModificarPersonal", JSON.parse(json)).subscribe(result => {

      //this._personal = result;

      //this.obtenerPersonal();

 

    });


  }



  public obtenerEspecificoPersonal(): void {

    let json = JSON.stringify({

      id: this.idUser,
      busqueda: this._busqueda

    });


    this.http.post<personal[]>("api/Personal/ObtenerBusquedaPersonalizadaPersonal", JSON.parse(json)).subscribe(result => {

      if (result.length != 0) {

        this._personal = result;
        this.inexistente = true;
      //  this.consulta = false;


      } else {

        this.inexistente = false;
       // this.consulta = false;
      }

  

    });

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


interface personal {

  a: number;
  b: string;
  c: string;
  d: number;
  e: string;
  f: number;  /* aqui representa el cargo int */
  g: string; /* aqui representa el cargo string */

}
