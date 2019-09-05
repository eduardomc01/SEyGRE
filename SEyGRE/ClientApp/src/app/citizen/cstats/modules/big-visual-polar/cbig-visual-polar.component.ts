import { Component, OnInit, ViewChild } from '@angular/core';
import { CPolarComponent } from "../polar/cpolar.component";

@Component({
  selector: 'app-cbig-visual-polar',
  templateUrl: './cbig-visual-polar.component.html',
  styleUrls: ['./cbig-visual-polar.component.css']
})

export class CBigVisualPolarComponent implements OnInit {

  @ViewChild(CPolarComponent) p: CPolarComponent;

  ngOnInit() {

    this.p.show = true;

  }


}
