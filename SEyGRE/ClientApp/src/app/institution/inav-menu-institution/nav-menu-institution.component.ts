import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav-menu-institution',
  templateUrl: './nav-menu-institution.component.html',
  styleUrls: ['./nav-menu-institution.css'],
})

export class NavMenuInstitutionComponent {

  nombre: string = sessionStorage.getItem("nombre");
  today: number = Date.now();
  onCentros: number;
  offCentros: number;

  constructor(private http: HttpClient, private router: Router) {

 

  }




  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  closeSession() {
    sessionStorage.clear();
    this.router.navigate(["/Login"]);
  }


  obtenerResultados() {

    this.http.get<any>('api/Institucion/ObtenerTotalCentrosActivos').subscribe(result => {

      this.onCentros = result;

      this.http.get<any>('api/Institucion/ObtenerTotalCentrosDesactivados').subscribe(result => {

        this.offCentros = result;

      });

    });
  }




}
