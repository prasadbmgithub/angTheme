import { Component, OnInit } from '@angular/core';
import {navItem,navCollapseItem} from '../../config-model/nav-item';
import {NavigationItems} from '../../config-model/navigation';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

navItems:navCollapseItem[];

  constructor() { }

  ngOnInit() {
    this.navItems=NavigationItems;
  }

}
