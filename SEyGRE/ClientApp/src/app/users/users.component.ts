import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

  public _personal: personal[];

  constructor(private http: HttpClient, private router: Router) {

    this.http.get<personal[]>("api/Personal/GetPersonal").subscribe(result => {

      this._personal = result;

    });

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
