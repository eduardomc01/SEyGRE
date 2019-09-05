import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recycler-states',
  templateUrl: './recycler-states.component.html',
  styleUrls: ['./recycler-states.component.css']
})
export class RecyclerStatesComponent implements OnInit {

  barra: number=0;

  constructor() {

  }

  ngOnInit() {
  }

  obtenerNumeros(barra: number) {

    this.barra = barra;

  }


}
