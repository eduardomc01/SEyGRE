import { Component } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent {

  public i: number;
  public C: number[] = [];
  private idUser: string = sessionStorage.getItem("idUser");

  public pieChartLabels: Label[];
  public pieChartData: Number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [{ backgroundColor: ['rgba(40,180,99,.9)', 'rgba(52, 152, 219,.9)', 'rgba(231, 76, 60,.9)'] }];


  constructor(private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);


    let json = JSON.stringify({ id: this.idUser });

    this.http.post("api/Componentes/ObtenerInformacionCircular", JSON.parse(json)).subscribe(result => {

      for (this.i = 0; this.i <= 3; this.i++) { this.C.push(result[this.i]) }

      console.log("pie --> " + result);

    });


  this.pieChartLabels = ["Equipos de informática y telecomunicaciones", "Aparatos electrónicos de consumo", "Juguetes o equipos deportivos y de tiempo libre"];
  this.pieChartData = this.C;


  }

}
