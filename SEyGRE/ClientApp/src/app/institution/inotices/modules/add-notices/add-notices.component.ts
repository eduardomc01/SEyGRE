import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TableNoticesComponent } from '../table-notices/table-notices.component';

@Component({
  selector: 'app-add-notices',
  templateUrl: './add-notices.component.html',
  styleUrls: ['./add-notices.component.css']
})
export class AddNoticesComponent implements OnInit {

  //@Input() prueba: TableNoticesComponent;

  _nombre: string;
  _imagenUrl: string;
  _noticiaUrl: string;
  _descripccion: string;

  constructor(private http: HttpClient, private router: Router) { }



 // @HostListener("click")
  ObtenerDatos() {

   var json = JSON.stringify({
 
      nombre: this._nombre,
      imagenUrl: this._imagenUrl,
      noticiaUrl: this._noticiaUrl,
      descripccion: this._descripccion

   });


    this.http.post<any>('api/Institucion/AgregarNoticia', JSON.parse(json)).subscribe(()=> {

    //  this.prueba.obtenerNoticias();

   });


  }


  ngOnInit() {
  }

}
