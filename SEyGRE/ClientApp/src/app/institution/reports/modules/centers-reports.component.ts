import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; /* recuerda el cambio aqui */

@Component({
  selector: 'app-centers-reports',
  templateUrl: './centers-reports.component.html',
  styleUrls: ['./centers-reports.component.css']
})
export class CentersReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  generarPDF() {

    var data = document.getElementById("bars");

    html2canvas(data).then(canvas => {

      var imgWidth = 200;

      var imgHeight = canvas.height * imgWidth / canvas.width;


      const contentDataURL = canvas.toDataURL('image/jpg')
      let pdf = new jspdf('p', 'mm', 'A4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'jpg', 0, position, imgWidth, imgHeight)
      pdf.save('barras.pdf'); // Generated PDF   
    });

  }


}
