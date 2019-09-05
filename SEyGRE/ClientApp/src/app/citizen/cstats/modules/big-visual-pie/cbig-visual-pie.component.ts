import { Component, OnInit, ViewChild } from '@angular/core';
import { CPieComponent } from "../pie/cpie.component";

@Component({
  selector: 'app-cbig-visual-pie',
  templateUrl: './cbig-visual-pie.component.html',
  styleUrls: ['./cbig-visual-pie.component.css']
})

export class CBigVisualPieComponent implements OnInit {

  @ViewChild(CPieComponent) p: CPieComponent;

  ngOnInit() {

    this.p.show = true;

  }


}
