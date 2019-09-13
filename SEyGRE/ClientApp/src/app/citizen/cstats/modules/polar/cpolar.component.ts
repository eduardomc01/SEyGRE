import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-cpolar',
  templateUrl: './cpolar.component.html',
  styleUrls: ['./cpolar.component.css']
})
export class CPolarComponent implements OnInit {

  private idUser: string = sessionStorage.getItem("idUser");


  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = true;
  public polarAreaColors = [{ backgroundColor: ['rgba(40,180,99,.6)', 'rgba(52, 152, 219,.6)', 'rgba(231, 76, 60,.6)', 'rgba(149, 61, 231,.6)', 'rgba(0, 253, 146,.6)', 'rgba(231, 61, 159,.6)', 'rgba(242, 253, 0,.6)', 'rgba(165, 180, 174,.6)','rgba(71, 3, 189,.6)']}];
  public polarAreaChartType: ChartType = 'polarArea';

  public show: boolean;

  constructor(private router: Router, private http: HttpClient) {

    this.show = false;

   // this.getPolar();
    
  }

  public ngOnInit(): void {

    //this.getPolar();

  }


  public getPolar(): void {

    this.http.get<number[]>("api/Ciudadanos/ObtenerInformacionPolar").subscribe(result => {

      this.polarAreaChartLabels = ["Cobre", "Hierro", "Niquel", "Estaño", "Plomo", "Aluminio","Oro","Plata","Paladio"];
      this.polarAreaChartData = result;


    });

  }




  generarPDF() {

    var data = document.getElementById("polar");
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 300;
      //var pageHeight = 400;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      //var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('l', 'mm', 'A4'); // A4 size page of PDF  
      var position = 10;
      pdf.addImage(contentDataURL, 'png', 0, position, imgWidth, imgHeight)
      pdf.save('c-polar.pdf'); // Generated PDF   
    });

  }



  public Maximizar(): void {

    this.router.navigate(["/c-big-visual-polar"]);

  }

  public Regresar(): void {

    this.router.navigate(["/c-stats"]);

  }


 
}
