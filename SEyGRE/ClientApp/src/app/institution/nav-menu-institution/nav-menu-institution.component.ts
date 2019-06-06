import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu-institution',
  templateUrl: './nav-menu-institution.component.html',
  styleUrls: ['./nav-menu-institution.css'],
})

export class NavMenuInstitutionComponent {

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  /*
  close() {
    sessionStorage.clear();
  }
  */

}
