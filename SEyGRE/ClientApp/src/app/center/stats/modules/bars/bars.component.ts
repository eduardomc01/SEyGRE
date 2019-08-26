import { Component} from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})


export class BarsComponent {

  public i: number;
  public B: number[] = [];

  private idUser: string = sessionStorage.getItem("idUser");

  public barChartLabels: Label[];
  public barChartLegend = true;
  public barChartType = 'bar';
  public barChartData: ChartDataSets[];
  public ChartColors: Color[] = [{ backgroundColor: 'rgb(40, 180, 99)' }]
 
  constructor (private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    //let json = JSON.stringify({ id: this.idUser });

    this.http.get("api/Componentes/ObtenerInformacionBarras?id=" + this.idUser).subscribe(result => {

      for (this.i = 0; this.i <= 5; this.i++) { this.B.push(result[this.i]) }

      console.log("stats --> " + result);

    });

    this.barChartLabels = ["2019", "2020", "2021", "2022", "2023"];
    this.barChartData = [{ data: this.B, label: 'Residuos por año' }];

  }

}
