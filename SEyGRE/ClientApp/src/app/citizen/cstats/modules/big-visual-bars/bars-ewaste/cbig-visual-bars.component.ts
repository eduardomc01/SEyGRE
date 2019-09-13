import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CBarsComponent } from "../../bars/bars-ewaste/cbars.component";

@Component({
  selector: 'app-cbig-visual-bars',
  templateUrl: './cbig-visual-bars.component.html',
  styleUrls: ['./cbig-visual-bars.component.css']
})
export class CBigVisualBarsComponent implements OnInit {

  @ViewChild(CBarsComponent) p: CBarsComponent;

  ngOnInit() {

    this.p.show = true;

  }

}
