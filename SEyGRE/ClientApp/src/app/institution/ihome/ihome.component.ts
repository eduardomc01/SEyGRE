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

  idUser: string = sessionStorage.getItem("idUser");
  nombre: string = sessionStorage.getItem("nombre");

  today: number = Date.now();

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);


  }


  public closeSession() {

    sessionStorage.clear();
    this.router.navigate(["/Login"]);

  }

}
