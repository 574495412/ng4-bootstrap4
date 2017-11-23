import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  // template: `
  //   // <ngx-sample-layout>
  //   //   <nb-menu [items]="menu"></nb-menu>
  //     <router-outlet></router-outlet>
  //   // </ngx-sample-layout>
  // `,
  template: `
    <router-outlet>
     </router-outlet>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}