import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
  providers: [NgbAlertConfig]
})
export class TableUsersComponent {

  public showSuccess: boolean;
  public showDanger: boolean;
  public staticAlertClosed;
  public _menssage: string;

  public _personal: personal[];

  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/Login"]);

    this.http.get<personal[]>("api/Personal/GetPersonal").subscribe(result => {

      this._personal = result;

      this.mensajesAlerts(result.length);

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
  f: number;
  g: number;

}
