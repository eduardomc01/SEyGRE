import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recycler-states',
  templateUrl: './recycler-states.component.html',
  styleUrls: ['./recycler-states.component.css']
})
export class RecyclerStatesComponent {


  public _componentes: any;
  public _busqueda: string;

  public showSuccess: boolean;
  public staticAlertClosed;


  public consulta: boolean;
  public inexistente: boolean;

  public idUser: string = sessionStorage.getItem("idUser");
  public showSave: boolean = true;

  paginaPrincipal: number = 1;

  fase: number;


  constructor(private http: HttpClient, private router: Router) {
    this.inexistente = true;
    this.consulta = true;

    this.obtenerComponentes();

  }


  public obtenerComponentes(): void {

    

    this.http.get<any>("api/Componentes/ObtenerResiduos?id=" + this.idUser).subscribe(result => {

      console.log(result);

      this._componentes = result;

    });


  }



  public obtenerBusquedaComponentes(): void {

    let json = JSON.stringify({

      id: this.idUser,
      busqueda: this._busqueda

    });


    this.http.post<any>("api/Componentes/ObtenerBusquedaPersonalizada", JSON.parse(json)).subscribe(result => {


      if (result.length != 0) {

        this._componentes = result;
        this.inexistente = true;
        this.consulta = false;


      } else {

        this.inexistente = false;
        this.consulta = false;
      }

    });


  }



  etapaReciclado(id: number, fase: number) {

    let json = JSON.stringify({

      id: id,
      idEtapa: fase

    });


    this.http.post<any>("api/Componentes/ModificarEstadoReciclaje", JSON.parse(json)).subscribe(() => {

      this.obtenerComponentes();

    });



  }



}
