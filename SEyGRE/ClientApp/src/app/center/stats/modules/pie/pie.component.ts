import { Component , ViewChild, OnInit} from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit {

  private idUser: string = sessionStorage.getItem("idUser");

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [{ backgroundColor: ['rgba(40,180,99,.6)', 'rgba(52, 152, 219,.6)', 'rgba(231, 76, 60,.6)'] }];

  public show: boolean;

  constructor(private router: Router, private http: HttpClient) {

    this.show = false;

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);


    this.getPastel();


  }


  public ngOnInit(): void {

  //  this.getPastel();

  }

  //"Cobre", "Hierro", "Niquel", "Estaño", "Plomo", "Aluminio", "Oro", "Plata", "Paladio"
  //"api/Componentes/ObtenerInformacionRadar"

  public getPastel(): void {

    this.http.get<number[]>("api/Componentes/ObtenerInformacionCircular?id=" + this.idUser).subscribe(result => {

      this.pieChartLabels = ["Equipos de informática y telecomunicaciones", "Aparatos electrónicos de bajo consumo", "Juguetes o equipos deportivos y de tiempo libre"];
      this.pieChartData = result;


    });
  
  }


  public Maximizar(): void {

    this.router.navigate(["/big-visual"]);

  }

  public Regresar(): void {

    this.router.navigate(["/stats"]);

  }


}
