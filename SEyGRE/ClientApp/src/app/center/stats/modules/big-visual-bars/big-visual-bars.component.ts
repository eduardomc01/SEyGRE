import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BarsComponent } from "../bars/bars.component";

@Component({
  selector: 'app-big-visual-bars',
  templateUrl: './big-visual-bars.component.html',
  styleUrls: ['./big-visual-bars.component.css']
})
export class BigVisualBarsComponent implements OnInit {

  @ViewChild(BarsComponent) p: BarsComponent;

  ngOnInit() {

    this.p.show = true;

  }

}
