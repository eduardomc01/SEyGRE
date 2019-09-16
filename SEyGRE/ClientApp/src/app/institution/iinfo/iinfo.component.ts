import { Component  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-institution',
  templateUrl: './iinfo.component.html',
  styleUrls: ['./iinfo.component.css']
})
export class IInfoComponent {

  constructor(private router: Router) {

    if (sessionStorage.getItem("idUser") == null)
      this.router.navigate(["/Login"]);

  }

  
}
