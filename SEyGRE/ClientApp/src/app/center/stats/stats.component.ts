import { Component, ViewChild } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})


export class StatsComponent {
 
  constructor(private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

  }

}



  /**** RADAR CHART  *****/
/*  
 


  /******** LINE CHARTS **********/

  /*
 




  /*** COLORES PARA UTILIZAR ****/





  //GREEN GENERAL
  


  //GREEN CON TRANSPARENCIA EN EL MEDIO Y BORDES BIEN MARCADOS

/*
 *  
*/

/*

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}

*/

