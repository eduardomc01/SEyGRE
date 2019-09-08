import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu-institution',
  templateUrl: './nav-menu-institution.component.html',
  styleUrls: ['./nav-menu-institution.css'],
})

export class NavMenuInstitutionComponent {

  constructor(private router: Router) {  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  closeSession() {
    sessionStorage.clear();
    this.router.navigate(["/Login"]);
  }




}
