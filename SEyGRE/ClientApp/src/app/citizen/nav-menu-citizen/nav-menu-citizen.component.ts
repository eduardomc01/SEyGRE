import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu-citizen',
  templateUrl: './nav-menu-citizen.component.html',
  styleUrls: ['./nav-menu-citizen.css'],
})

export class NavMenuCitizenComponent {

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
