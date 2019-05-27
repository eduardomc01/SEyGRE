import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-components',
  templateUrl: './add-components.component.html',
  styleUrls: ['./add-components.component.css']
})

export class AddComponentsComponent {

  nombre: string;
  peso: number;
  clasificacion: number;
  fecha: Date;

  constructor(private http: HttpClient, private router: Router) { }

  ObtenerDatos() {

    let json = JSON.stringify({

      nombre: this.nombre,
      peso: this.peso,
      idClasificacion: this.clasificacion,
      fecha: this.fecha

    });

    this.http.post("api/Componentes/InsertarComponentes", JSON.parse(json)).subscribe(() => { });

  }


}
