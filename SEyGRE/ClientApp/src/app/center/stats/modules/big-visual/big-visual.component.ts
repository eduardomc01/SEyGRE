import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PieComponent } from "../pie/pie.component";

@Component({
  selector: 'app-big-visual',
  templateUrl: './big-visual.component.html',
  styleUrls: ['./big-visual.component.css']
})
export class BigVisualComponent implements OnInit {

  @ViewChild(PieComponent) p: PieComponent;


  ngOnInit() {

    this.p.show = true;

  }
  


  

}
