import { Component , ViewChild, OnInit} from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-cpie',
  templateUrl: './cpie.component.html',
  styleUrls: ['./cpie.component.css']
})

export class CPieComponent implements OnInit {

  private idUser: string = sessionStorage.getItem("idUser");

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [{ backgroundColor: ['rgba(40,180,99,.6)', 'rgba(52, 152, 219,.6)', 'rgba(231, 76, 60,.6)'] }];

  public validate: string;

  public show: boolean;

  constructor(private router: Router, private http: HttpClient) {

    this.show = false;
    //this.getPastel();

  }


  public ngOnInit(): void {

  //  this.getPastel();

  }

  //"Cobre", "Hierro", "Niquel", "Estaño", "Plomo", "Aluminio", "Oro", "Plata", "Paladio"

  public getPastel(b: string): void {

    this.http.get<number[]>("api/Ciudadanos/ObtenerInformacionCircular?busqueda=" + b).subscribe(result => {

      this.pieChartLabels = ["Equipos de informática y telecomunicaciones", "Aparatos electrónicos de bajo consumo", "Juguetes o equipos deportivos y de tiempo libre"];
      this.pieChartData = result;


    });
  
  }




  generarPDF() {

    var data = document.getElementById("pie");
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
      pdf.save('c-pie.pdf'); // Generated PDF   
    });

  }



  public Maximizar(): void {

    this.router.navigate(["/c-big-visual-pie"]);

  }

  public Regresar(): void {

    this.router.navigate(["/c-stats"]);

  }


}
