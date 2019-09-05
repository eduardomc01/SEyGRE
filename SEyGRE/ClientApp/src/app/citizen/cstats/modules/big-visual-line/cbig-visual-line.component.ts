import { Component, OnInit, ViewChild } from '@angular/core';
import { CLineComponent } from "../line/cline.component";


@Component({
  selector: 'app-cbig-visual-line',
  templateUrl: './cbig-visual-line.component.html',
  styleUrls: ['./cbig-visual-line.component.css']
})
export class CBigVisualLineComponent implements OnInit {


  @ViewChild(CLineComponent) p: CLineComponent;


  ngOnInit() {

    this.p.show = true;

  }

}
