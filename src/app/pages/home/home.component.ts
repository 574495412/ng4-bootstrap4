import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-home',
  templateUrl: './redirect.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {
  userInfo = GlobalService.data;

  swiperData={
    location:[],
    myEvents:[],
    popular:[],
    upcoming:[],
    circles:[]
  };
  constructor(private http: HttpService, private g:GlobalService) {  window.location.href = "https://chumi.co/app"; }

  ngOnInit() {
    //redirect to domain/app

    this.getExplore();
    this.g.dataChange.subscribe((value) => {
      this.userInfo = value;
      this.getExplore();
    });
  }

  //todo: 经纬度
  //todo: 语言目前用的是浏览器语言
  getExplore(){
    this.http.getExplore(this.userInfo.language,this.userInfo.location.lat,this.userInfo.location.long).subscribe(
      data => {
        this.swiperData = data;
        console.log(data);
      },
      error => {
        alert(error);
      }
    );
  }

  display(key){
    if(this.swiperData[key]){
      if(this.swiperData[key].length>0){
        return true;
      }else{
        return false;
      }
    }else {
      return false;
    }
  }
}
