import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrls: ['./table-events.component.css'],
  providers: [NgbAlertConfig]
})

export class TableEventsComponent {

  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/"]);


  }

}
