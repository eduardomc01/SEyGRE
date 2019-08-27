import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actions-components',
  templateUrl: './actions-components.component.html',
  styleUrls: ['./actions-components.component.css']
})
export class ActionsComponentsComponent {

  public _componentes: componentes[] = [];
  public _busqueda: string;

  public showSuccess: boolean;
  public staticAlertClosed;

  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    this.http.get<componentes[]>("api/Componentes/ObtenerTopResiduos?id=" + this.idUser).subscribe(result => {

      this._componentes = result;

    });

  }


}


interface componentes {

  a: number;
  b: string;
  c: number;
  d: string;
  e: string;

}
