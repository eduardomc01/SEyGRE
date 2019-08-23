import { Component, ViewChild } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {

  public i: number;
  public R: number[] = [];

  private idUser: string = sessionStorage.getItem("idUser");

  public radarChartLabels: Label[] = ["Cobre", "Aluminio", "Oro", "Plata", "Estaño", "Retardante de flama (RFB)"];
  public radarChartType: ChartType = 'radar';
  public ChartColorsTransparent: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .2)', borderColor: 'rgb(40, 180, 99)' }]
  public radarChartData: ChartDataSets[];

  constructor(private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);


    let json = JSON.stringify({ id: this.idUser });

    this.http.post("api/Componentes/ObtenerInformacionRadar", JSON.parse(json)).subscribe(result => {

     // for (this.i = 0; this.i <= 6; this.i++) { this.R.push(result[this.i]) }

      console.log("radar --> " + result);

    });

    this.radarChartData = [{ data: [.2, .5, .4, 1.7, .8, 2.2], label: "Elemento" }];

   }


 
}
