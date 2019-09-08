import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notices',
  templateUrl: './add-notices.component.html',
  styleUrls: ['./add-notices.component.css']
})
export class AddNoticesComponent implements OnInit {

  _nombre: string;
  _imagenUrl: string;
  _noticiaUrl: string;
  _descripccion: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  ObtenerDatos() {

   var json = JSON.stringify({
 
      nombre: this._nombre,
      imagenUrl: this._imagenUrl,
      noticiaUrl: this._noticiaUrl,
      descripccion: this._descripccion

   });


    this.http.post<any>('api/Institucion/AgregarNoticia', JSON.parse(json)).subscribe(()=> {



   });


  }


}
