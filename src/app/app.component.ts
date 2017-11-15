import { Component, OnInit } from '@angular/core';
import {GlobalService} from "./global.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalService]
})
export class AppComponent implements OnInit{
  constructor(private g:GlobalService, private translate:TranslateService){
    translate.setDefaultLang('cn');
    if(translate.getBrowserLang() == "zh-CN" || translate.getBrowserLang() == "zh-TW") {
      translate.use("cn");
    }
    else {
      translate.use("en");
    }

  }
  ngOnInit() {
    // this.g.getUserInfo();
  }
}
