/**
 * @license
 * Copyright Chrise. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import {GlobalService} from "./pages/global.service";
import {TranslateService} from '@ngx-translate/core';
import {Router, NavigationEnd, NavigationStart, ActivatedRoute} from '@angular/router';
import { AnalyticsService } from './@core/utils/analytics.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalService]
})
export class AppComponent implements OnInit{
  constructor(private router: Router,private g:GlobalService, private translate:TranslateService,private analytics: AnalyticsService){
    translate.setDefaultLang('cn');
    if(translate.getBrowserLang() == "zh-CN" || translate.getBrowserLang() == "zh-TW") {
      translate.use("cn");
    }
    else {
      translate.use("en");
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      console.log(1)
      $("#preloader").show()
      }
      
      if (event instanceof NavigationEnd) {
        console.log(2)
        $("#preloader").hide()
        // this.componentList.forEach(
        //   list => {
        //     if (this.router.url.indexOf(list.path) >= 0) {
        //       this.titleService.setTitle(list.title);
        //     }
        //   }
        // );
      }
    });
  }
  ngOnInit() {
    this.analytics.trackPageViews();
    // this.g.getUserInfo();
  }
}
