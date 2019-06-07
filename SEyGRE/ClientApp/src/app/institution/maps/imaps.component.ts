import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imaps',
  templateUrl: './imaps.component.html',
  styleUrls: ['./imaps.component.css'],
  providers: [NgbAlertConfig]
})
export class IMapsComponent {


  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);



}
