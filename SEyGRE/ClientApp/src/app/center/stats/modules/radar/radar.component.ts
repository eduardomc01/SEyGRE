import { Component, ViewChild } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {

  private idUser: string = sessionStorage.getItem("idUser");
  /*
  public radarChartLabels: Label[] = [];
  public radarChartType: ChartType = 'radar';
  public ChartColorsTransparent: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .1)', borderColor: 'rgb(40, 180, 99)' }]
  public radarChartData: ChartDataSets[] = [{ data: [], label: ""}];
  */

  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = true;
  public polarAreaColors = [{ backgroundColor: ['rgba(40,180,99,.6)', 'rgba(52, 152, 219,.6)', 'rgba(231, 76, 60,.6)', 'rgba(149, 61, 231,.6)', 'rgba(0, 253, 146,.6)', 'rgba(231, 61, 159,.6)', 'rgba(242, 253, 0,.6)', 'rgba(165, 180, 174,.6)','rgba(71, 3, 189,.6)']}];

  public polarAreaChartType: ChartType = 'polarArea';


  constructor(private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

      //let json = JSON.stringify({ id: this.idUser });



      this.getRadar();

  }


  public getRadar(): void {

    this.http.get<number[]>("api/Componentes/ObtenerInformacionRadar").subscribe(result => {

      this.polarAreaChartLabels = ["Cobre", "Hierro", "Niquel", "Estaño", "Plomo", "Aluminio","Oro","Plata","Paladio"];
      this.polarAreaChartData = result;

      /*
      this.radarChartLabels = ["Cobre", "Hierro", "Niquel", "Estaño", "Plomo", "Aluminio", "Oro", "Plata", "Paladio"];
      this.radarChartData = [{ data: result, label: "Elemento" }];
      */

    });

  }


 
}
