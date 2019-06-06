import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ihome',
  templateUrl: './ihome.component.html',
  styleUrls: ['./ihome.component.css'],
  providers: [NgbAlertConfig]
})
export class IHomeComponent {

  public nombre: string;

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/"]);

    this.nombre = sessionStorage.getItem("nombre");

  }





  public closeSession() {

    sessionStorage.clear();
    this.router.navigate(["/"]);

  }

}
