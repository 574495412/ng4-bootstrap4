import { Component, OnInit, Input } from '@angular/core';
import "../../../assets/js/jquery.magnific-popup.min.js";
import "../../../assets/js/menubox.js";
import {HttpService} from "../http.service";
import {GlobalService} from "../global.service";
import {Router} from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    providers: [HttpService]
})
export class NavComponent implements OnInit {
    groupId = GlobalService.data.groupId;
    userInfo=GlobalService.data;
    switch:boolean = true;
    img:string;
    @Input() subNav: boolean = false;
    appdownload = "https://www.chumi.co/app";
    private searchText='';

    constructor(private http: HttpService, private g:GlobalService, private router:Router) {}

    ngOnInit() {

      //if wechat
      if( navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1 ) {
        //在微信中打开
        this.appdownload = "http://a.app.qq.com/o/simple.jsp?pkgname=co.chumi.cq.www";
      }else{
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if(isAndroid){
          this.appdownload = "https://play.google.com/store/apps/details?id=co.chumi.cq.www&hl=en";
        }
        if(isiOS){
          this.appdownload = "https://itunes.apple.com/app/apple-store/id1118531323?mt=8w";
        }

      }


        //todo:把jquery改成ng2
        $('.cd-popup').on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
                $(this).removeClass('is-visible');
            }
        });
        //close popup when clicking the esc keyboard button
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup').removeClass('is-visible');
            }
        });


    }
    openSignIn(){
        $('.cd-popup').addClass('is-visible');
    }
    switchView(){
        this.switch = !this.switch;
    }
    closeSign(){
        $('.cd-popup').removeClass('is-visible');
    }
    logout(){
        this.g.logout();
    }
    search(){
        this.router.navigate(['search/'+this.searchText]);
    }
    navToMessage(){
      this.router.navigate(['center/message']);
    }
    navToFriend(){
      this.router.navigate(['center/friend']);
    }
    navToCreate(){
      this.router.navigate(['create']);
    }

    navToAllTypes(){

    }

    navToEvents(){

    }

    navToCircles(){

    }
}
