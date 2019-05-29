import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [NgbAlertConfig]
})


export class UsersComponent implements OnInit {

  public showSuccess: boolean;
  public showDanger: boolean;
  public staticAlertClosed;
  public _menssage: string;

  public _personal: personal[];
  public _centro: centro[];


  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/"]);

    this.http.get<personal[]>("api/Personal/GetPersonal").subscribe(result => {

      this._personal = result;

      this.mensajesAlerts(result.length);

    });

  }

  ngOnInit() {     /* obteniendo al usuario o centro ngOnInit es parecido al constructor */

    let json = JSON.stringify({
      id: this.idUser
    });
    
    this.http.post<centro[]>("api/CentrosAcopio/ObtenerCentro", JSON.parse(json)).subscribe(result => {

      this._centro = result;

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

interface centro {

  h: number;
  i: string;
  j: string;

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


