import { Component, ViewChild } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .6)' }]


  public lineChartData: ChartDataSets[] = [{ data: [], label: ""}]

  public idUser: string = sessionStorage.getItem("idUser");

  constructor(private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    this.getLine();

  }


  public getLine(): void {

    this.http.get<number[]>("api/Componentes/ObtenerInformacionLinear?id=" + this.idUser).subscribe(result => {

      console.log(result);

      this.lineChartLabels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octrubre", "Noviembre", "Diciembre"];
      this.lineChartData = [{ data: result, label: this.idUser }];
    });

  }


}
