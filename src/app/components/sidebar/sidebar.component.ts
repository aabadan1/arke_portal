import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '', title: 'Home: Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/rfqconfigurator', title: 'RFQ Configurator',  icon:'ni-books text-black', class: '' },
    { path: '/quoteconfigurator', title: 'Quote Configurator',  icon:'fas fa-file-alt text-black', class: '' },
    { path: '/tables', title: 'Evaluation Engine',  icon:'fas fa-percent text-black', class: '' },
    { path: '/rfq', title: 'Award Engine',  icon:'fas fa-ribbon text-black', class: '' },
    { path: '/ffq', title: 'Catalog Configurator',  icon:'fas fa-book-open text-black', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
