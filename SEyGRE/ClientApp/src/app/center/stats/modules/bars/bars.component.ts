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

  private idUser: string = sessionStorage.getItem("idUser");

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartType = 'bar';
  public barChartData: ChartDataSets[] = [{ data: [], label: "" }];;
  public ChartColors: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .6)' }]
 
  constructor (private router: Router, private http: HttpClient) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    try {

      this.getBarras();

    } catch (e) {

      console.log("error " + e);

    }


    
  }

  public getBarras():void {


    this.http.get<number[]>("api/Componentes/ObtenerInformacionBarras?id=" + this.idUser).subscribe(result => {


      this.barChartLabels = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
      this.barChartData = [{ data: result, label: 'Residuos por año' }];

    });

  }

}
