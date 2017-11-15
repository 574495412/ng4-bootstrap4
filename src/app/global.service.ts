/**
 * Created by vv on 13/07/2017.
 */

import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Subject} from "rxjs";

@Injectable()
export class GlobalService{
  public static data = {
    groupId: '',
    isSigned: false,
    userImg: '',
    userId:'',
    username:'',
    email:'',
    isVip:false,
    // tags:['all'],
    language:'English',
    noticeNumber:0,
    location:{
      lat:0,
      long:0,
    },
    isFreeEvent: '',
    invoiceId: '',
    loading:true,
    default_currency:'',
    connectAccount:''
  };


  dataChange: Subject<any> = new Subject<any>();

  constructor(private http: HttpService) {
    GlobalService.data.userId = localStorage.getItem('id_token');
    if(GlobalService.data.userId!=""){
      GlobalService.data.isSigned=true;
    }
    navigator.geolocation.getCurrentPosition((position) =>{
      GlobalService.data.location.lat = position.coords.latitude;
      GlobalService.data.location.long = position.coords.longitude;
    });
  }

  getUserInfo(){

    this.http.getBasicInfo().subscribe(
      data => {
        if(data.length==1){
          GlobalService.data.isSigned = false;
        }else {
          if (data.email) {
            GlobalService.data.isSigned = true;
            GlobalService.data.userImg = this.http.imghost + data.userPhoto;
            GlobalService.data.username = data.username;
            GlobalService.data.email = data.email;
            GlobalService.data.isVip = data.certificate;
            GlobalService.data.noticeNumber = data.notifi_numberLeft;
            // GlobalService.data.tags = data.tags;
            GlobalService.data.default_currency = data.default_currency;
            GlobalService.data.connectAccount = data.connectAccount;

            //
          } else {
            GlobalService.data.isSigned = false;
          }
          this.dataChange.next(GlobalService.data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  logout(){
    this.http.postLogout().subscribe(
      data => {
        localStorage.setItem('id_token', '');
        GlobalService.data.isSigned = false;
        this.dataChange.next(GlobalService.data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
