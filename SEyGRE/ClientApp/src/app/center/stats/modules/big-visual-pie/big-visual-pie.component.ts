import { Component, OnInit, ViewChild } from '@angular/core';
import { PieComponent } from "../pie/pie.component";

@Component({
  selector: 'app-big-visual-pie',
  templateUrl: './big-visual-pie.component.html',
  styleUrls: ['./big-visual-pie.component.css']
})

export class BigVisualPieComponent implements OnInit {

  @ViewChild(PieComponent) p: PieComponent;

  ngOnInit() {

    this.p.show = true;

  }


}
