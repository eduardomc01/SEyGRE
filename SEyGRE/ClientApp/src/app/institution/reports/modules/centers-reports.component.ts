import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas'; /* recuerda el cambio aqui */

@Component({
  selector: 'app-centers-reports',
  templateUrl: './centers-reports.component.html',
  styleUrls: ['./centers-reports.component.css']
})
export class CentersReportsComponent {

  centros: any;
  datos: any;
  datos2: any;
  totalEventos: number = 0;
  totalRE: number = 0;
  _id: string;

  constructor(private http: HttpClient) {

    this.http.get<any>('api/CentrosAcopio/ObtenerCentros').subscribe(result => {

      this.centros = result;

    });

  }


  obtenerDatos() {

   
    this.http.get<any>('api/Institucion/ObtenerInformacionYear?id=' + this._id).subscribe(result => {

      this.datos = result;


      this.http.get<any>('api/Institucion/ObtenerInformacionClasificacion?id=' + this._id).subscribe(result => {


        this.datos2 = result;


        this.http.get<any>('api/Institucion/ObtenerInformacionEventos?id=' + this._id).subscribe(result => {


          this.totalEventos = result;


          this.http.get<any>('api/Institucion/ObtenerInformacionElementos?id=' + this._id).subscribe(result => {


            this.totalRE = result;


          });


        });

      });

    });

  }


  generarPDF() {

    //let $img: any = document.querySelector('#file');

    var data = document.querySelector("#reporte");

    html2canvas(data).then(canvas => {

      var imgWidth = 285;

      var imgHeight = canvas.height * imgWidth / canvas.width;
      
      const contentDataURL = canvas.toDataURL('image/jpg')
      let pdf = new jspdf('l', 'mm', 'a4'); // A4 size page of PDF  
      var position = 5;
      pdf.addImage(contentDataURL, 'jpg', 5, position, imgWidth, imgHeight)
      pdf.save('reporte.pdf'); // Generated PDF   
    });

  }


}
