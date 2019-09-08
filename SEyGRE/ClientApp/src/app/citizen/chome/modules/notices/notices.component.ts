import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {


  public noticias: any;


  constructor(private http: HttpClient, private router: Router) {



  }



  ngOnInit() {

    this.http.get('api/Ciudadanos/ObtenerNoticias').subscribe(result => {

      console.log(result);

      this.noticias = result;

    });


  }



}
