import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [NgbAlertConfig]
})

export class UsersComponent{

  public a;

  public staticAlertClosed;
  public _personal: personal[];
  public _menssage: string;

  constructor(private http: HttpClient, private router: Router) {

    this.http.get<personal[]>("api/Personal/GetPersonal").subscribe(result => {

      this._personal = result;

    });

  }


  public prueba() {

    this.staticAlertClosed = false;
    this.a = 1;

  }

  public close() {

    this.staticAlertClosed = true;
    this.a = 0;

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
