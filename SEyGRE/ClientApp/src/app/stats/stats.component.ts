import { Component, ViewChild } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})


export class StatsComponent {

  public barChartLabels: Label[] = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Toneladas (t)' }

  ];




  /**** RADAR CHART  *****/

  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartType: ChartType = 'radar';

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];


  /***** PIE CHART *****/


  public pieChartLabels: Label[] = ['Download', 'Sales', 'Mail'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  /******** LINE CHARTS **********/


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [56, 39, 20, 51, 16, 25, 90], label: 'Series B' },
    { data: [11, 23, 30, 41, 26, 15, 100], label: 'Series C' },

  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLegend = true;
  public lineChartType = 'line';



  /*** COLORES PARA UTILIZAR ****/

  //GREEN GENERAL

  public ChartColors: Color[] = [
    {

      backgroundColor: 'rgb(40, 180, 99)',

    }]


  //GREEN CON TRANSPARENCIA EN EL MEDIO Y BORDES BIEN MARCADOS 

  public ChartColorsTransparent: Color[] = [
    {

      backgroundColor: 'rgba(40, 180, 99, .2)',
      borderColor: 'rgb(40, 180, 99)',

    }]


  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}

