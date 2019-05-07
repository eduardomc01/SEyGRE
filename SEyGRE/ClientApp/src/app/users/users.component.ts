import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [NgbAlertConfig]
})

export class UsersComponent{

  public showSuccess: boolean;
  public showDanger: boolean;

  public staticAlertClosed;
  public _personal: personal[];
  public _menssage: string;

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/"]);

    this.http.get<personal[]>("api/Personal/GetPersonal").subscribe(result => {

    try {

      this._personal = result;

      this.mensajesAlerts(result.length);

      } catch (e) {

       console.log(e);

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
  f: number;
  g: number;
  
}
