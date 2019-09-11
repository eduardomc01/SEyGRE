import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .6)' }]

  public show: boolean;

  public lineChartData: ChartDataSets[] = [{ data: [], label: ""}]

  public idUser: string = sessionStorage.getItem("idUser");

  constructor(private router: Router, private http: HttpClient) {

    this.show = false;

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

    this.getLine();

  }

  public ngOnInit(): void {

   // this.getLine();


  }


  generarPDF() {

    var data = document.getElementById("line");
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 300;
      //var pageHeight = 400;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      //var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/jpg')
      let pdf = new jspdf('l', 'mm', 'A4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'jpg', 0, position, imgWidth, imgHeight)
      pdf.save('line.pdf'); // Generated PDF   
    });

  }


  public getLine(): void {

    this.http.get<number[]>("api/Componentes/ObtenerInformacionLinear?id=" + this.idUser).subscribe(result => {

      
      this.lineChartLabels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octrubre", "Noviembre", "Diciembre"];
      this.lineChartData = [{ data: result, label: "Kilogramos" }];
    });

  }



  public Maximizar(): void {

    this.router.navigate(["/big-visual-line"]);

  }

  public Regresar(): void {

    this.router.navigate(["/stats"]);

  }



}
