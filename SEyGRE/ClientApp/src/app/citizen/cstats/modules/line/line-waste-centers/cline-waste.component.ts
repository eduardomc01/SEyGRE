import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-cline-waste',
  templateUrl: './cline-waste.component.html',
  styleUrls: ['./cline-waste.component.css']
})
export class CLineWasteComponent implements OnInit {

  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [{ backgroundColor: 'rgba(40, 180, 99, .6)' }]

  public validate: string;

  public show: boolean;

  public lineChartData: ChartDataSets[] = [{ data: [], label: "" }, { data: [], label: "" }]

  public idUser: string = sessionStorage.getItem("idUser");

  constructor(private router: Router, private http: HttpClient) {

    this.show = false;

   // this.getLine();

  }

  public ngOnInit(): void {

  }



  generarPDF() {

    var data = document.getElementById("line");
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 300;
      //var pageHeight = 400;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      //var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('l', 'mm', 'A4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'png', 0, position, imgWidth, imgHeight)
      pdf.save('c-line.pdf'); // Generated PDF   
    });

  }


  public getLine(): void {

    this.http.get<any>("api/Ciudadanos/ObtenerInformacionLinear2").subscribe(result => {

      this.lineChartLabels = result.centros;
      this.lineChartData = [

        { data: result.peso, label: "Kilogramos" },
        { data: result.pesoT, label: "Toneladas" }
      ];



    });
    

  }
      


  public Maximizar(): void {

    this.router.navigate(["/c-big-visual-line-waste-centers"]);

  }

  public Regresar(): void {

    this.router.navigate(["/c-stats"]);

  }



}
