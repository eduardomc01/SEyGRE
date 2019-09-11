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

  rutaImagenD: string = "../../../assets/image/sin-foto.png";
  rutaImagen: string = "../../../assets/profile/";
  idUser: string = sessionStorage.getItem("idUser");

  nombre: string = sessionStorage.getItem("nombre");
  nombreImagen: string;

  today: number = Date.now();
  showDefault: boolean;
  show: boolean;

  totalR: number;
  totalRxE: number;

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

      console.log(result[0].imagen.length);

      if (result[0].imagen.length == 0) {

        this.show = false;
        this.showDefault = true;
        
      } else {

        this.show = false;
        this.show = true;
        
        this.nombreImagen = result[0].imagen;

      }



    });


  }




  obtenerInformacionR() {

    this.http.get<number[]>("api/CentrosAcopio/ObtenerInformacionR?id=" + this.idUser).subscribe(result => {

      this.totalR = result[0];
      this.totalRxE = result[1];

    });


  }


}

interface datos {
  imagen: string;
}

