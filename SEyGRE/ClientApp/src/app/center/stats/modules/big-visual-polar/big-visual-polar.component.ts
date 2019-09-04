import { Component, OnInit, ViewChild } from '@angular/core';
import { PolarComponent } from "../polar/polar.component";

@Component({
  selector: 'app-big-visual-polar',
  templateUrl: './big-visual-polar.component.html',
  styleUrls: ['./big-visual-polar.component.css']
})

export class BigVisualPolarComponent implements OnInit {

  @ViewChild(PolarComponent) p: PolarComponent;

  ngOnInit() {

    this.p.show = true;

  }


}
