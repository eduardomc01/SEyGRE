import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TableUsersComponent } from '../table-users/table-users.component';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  public nombre: string;
  public apellidos: string;
  public edad: number;
  public direccion: string;
  public cargo: number;
  public idUser: string = sessionStorage.getItem("idUser");


  @ViewChild(TableUsersComponent) tableComp: TableUsersComponent;


  constructor(private http: HttpClient, private router: Router) { }

  public ngOnInit() { }

  public ObtenerDatos(): void {

    var json = JSON.stringify({

      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
      direccion: this.direccion,
      idCargo: this.cargo,
      idCentro: this.idUser

    });


    this.http.post<any>("api/Personal/AgregarPersonal", JSON.parse(json)).subscribe();


  }


}
