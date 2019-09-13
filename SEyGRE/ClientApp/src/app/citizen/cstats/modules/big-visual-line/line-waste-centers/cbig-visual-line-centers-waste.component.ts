import { Component, OnInit, ViewChild } from '@angular/core';
import { CLineWasteComponent } from "../../line/line-waste-centers/cline-waste.component";


@Component({
  selector: 'app-cbig-visual-line-centers-waste',
  templateUrl: './cbig-visual-line-centers-waste.component.html',
  styleUrls: ['./cbig-visual-line-centers-waste.component.css']
})
export class CBigVisualLineCentersWasteComponent implements OnInit {


  @ViewChild(CLineWasteComponent) p: CLineWasteComponent;


  ngOnInit() {

    this.p.show = true;

  }

}
