import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [NgbAlertConfig]
})
export class ProfileComponent implements OnInit {

  public _centro: centro[];

  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    if (this.idUser == null)
      this.router.navigate(["/Login"]);

  }

  public ngOnInit():void {

    let json = JSON.stringify({
      id: this.idUser
    });

    this.http.post<centro[]>("api/CentrosAcopio/ObtenerCentro", JSON.parse(json)).subscribe(result => {

      this._centro = result;

    });

  }


}

interface centro {

  a: number;
  b: string;
  c: string;

}
