import { Component, OnInit } from '@angular/core';
import { SideMenuModel } from '../../core/models/side-menu-route';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  adminMenu: SideMenuModel[] = [
    {
      icon: 'dashboard',
      route: '/admin/dashboard',
      title: 'Dashboards',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
