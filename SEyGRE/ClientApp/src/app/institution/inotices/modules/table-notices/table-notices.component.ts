import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-table-notices',
  templateUrl: './table-notices.component.html',
  styleUrls: ['./table-notices.component.css']
})
export class TableNoticesComponent {

  _noticias: any;


  constructor(private http: HttpClient, router: Router) {

    this.obtenerNoticias();

  }
  


  public obtenerNoticias(): void {

    this.http.get<any>("api/Institucion/ObtenerNoticias").subscribe(result => {

      this._noticias = result;

    });

  }



  public modificarNoticia(id: number, nombre: string, imagen: string, descripccion: string, noticia: string): void {

    let json = JSON.stringify({
      id: id,
      nombre: nombre,
      imagenUrl: imagen,
      descripccion: descripccion,
      noticiaUrl: noticia

    });


    this.http.post<any>("api/Institucion/ModificarNoticia", JSON.parse(json)).subscribe(result => {

      //this._noticias = result;

    });

  }



  public eliminarNoticia(id: number): void {

    this.http.post<any>("api/Institucion/EliminarNoticia", id).subscribe(result => {

      this.obtenerNoticias();

    });


  }



}
