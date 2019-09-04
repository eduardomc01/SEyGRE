import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-top-table-components',
  templateUrl: './top-components.component.html',
  styleUrls: ['./top-components.component.css']
})
export class TopComponentsComponent {

  public _componentes: componentes[] = [];
  public _busqueda: string;

  public showSuccess: boolean;
  public staticAlertClosed;

  private idUser: string = sessionStorage.getItem("idUser");

  constructor(private http: HttpClient, private router: Router) {

    this.ObtenerTop();

  }



  public ObtenerTop(): void {

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
