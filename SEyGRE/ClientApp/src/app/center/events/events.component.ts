import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [NgbAlertConfig]
})
export class EventsComponent {
 

  constructor(private http: HttpClient, private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

  }


}
