import { Component, OnInit} from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})


export class BarsComponent implements OnInit {

  private idUser: string = sessionStorage.getItem("idUser");

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartType = 'bar';
  public barChartData: ChartDataSets[] = [{ data: [], label: "" }];;
  public ChartColors: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .6)' }]

  public show: boolean;
  
  constructor (private router: Router, private http: HttpClient) {

    this.show = false;

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    this.getBarras();

  }


  public ngOnInit(): void {

    //this.getBarras();

  }


  generarPDF() {

        var data = document.getElementById("bars");
        
        html2canvas(data).then(canvas => {

        var imgWidth = 200;

        var imgHeight = canvas.height * imgWidth / canvas.width;


        const contentDataURL = canvas.toDataURL('image/jpg')
        let pdf = new jspdf('p', 'mm', 'A4'); // A4 size page of PDF  
        var position = 0;
        pdf.addImage(contentDataURL, 'jpg',0, position, imgWidth, imgHeight)
        pdf.save('barras.pdf'); // Generated PDF   
      });

  }


  public getBarras():void {


    this.http.get<number[]>("api/Componentes/ObtenerInformacionBarras?id=" + this.idUser).subscribe(result => {


      this.barChartLabels = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
      this.barChartData = [{ data: result, label: 'Kilogramos' }];

    });

  }


  public Maximizar(): void {

    this.router.navigate(["/big-visual-bars"]);

  }

  public Regresar(): void {

    this.router.navigate(["/stats"]);

  }


}
