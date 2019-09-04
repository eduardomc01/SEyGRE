import { Component, OnInit, ViewChild } from '@angular/core';
import { LineComponent } from "../line/line.component";


@Component({
  selector: 'app-big-visual-line',
  templateUrl: './big-visual-line.component.html',
  styleUrls: ['./big-visual-line.component.css']
})
export class BigVisualLineComponent implements OnInit {


  @ViewChild(LineComponent) p: LineComponent;


  ngOnInit() {

    this.p.show = true;

  }

}
