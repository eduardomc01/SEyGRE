import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {

  idUser: string = sessionStorage.getItem("idUser");
  nombre: string = sessionStorage.getItem("nombre");
  datos: datos[];
  today: number = Date.now();


  constructor(private http: HttpClient, private router: Router) {
    this.ObtenerFoto();
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
  



  public ObtenerFoto() {


    this.http.get<datos[]>("api/CentrosAcopio/ObtenerPerfil?id=" + this.idUser).subscribe(result => {

      console.log(result);

      this.datos = result;

    });


  }


}

interface datos {
  imagen: string;
}
