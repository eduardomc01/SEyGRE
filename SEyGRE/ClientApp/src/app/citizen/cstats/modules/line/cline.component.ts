import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cline',
  templateUrl: './cline.component.html',
  styleUrls: ['./cline.component.css']
})
export class CLineComponent implements OnInit {

  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .6)' }]

  public validate: string;

  public show: boolean;

  public lineChartData: ChartDataSets[] = [{ data: [], label: ""}]

  public idUser: string = sessionStorage.getItem("idUser");

  constructor(private router: Router, private http: HttpClient) {

    this.show = false;

   // this.getLine();

  }

  public ngOnInit(): void {

   // this.getLine();


  }


  public getLine(b: string): void {

    this.http.get<number[]>("api/Ciudadanos/ObtenerInformacionLinear?busqueda=" + b).subscribe(result => {

      
      this.lineChartLabels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octrubre", "Noviembre", "Diciembre"];
      this.lineChartData = [{ data: result, label: "Kilogramos" }];
    });

  }



  public Maximizar(): void {

    this.router.navigate(["/c-big-visual-line"]);

  }

  public Regresar(): void {

    this.router.navigate(["/c-stats"]);

  }



}
