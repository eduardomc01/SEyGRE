import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CBarsEventsComponent } from "../../bars/bars-events/cbars-events.component";

@Component({
  selector: 'app-cbig-visual-bars-events',
  templateUrl: './cbig-visual-bars-events.component.html',
  styleUrls: ['./cbig-visual-bars-events.component.css']
})
export class CBigVisualBarsEventsComponent implements OnInit {

  @ViewChild(CBarsEventsComponent) p: CBarsEventsComponent;

  ngOnInit() {

    this.p.show = true;

  }

}
