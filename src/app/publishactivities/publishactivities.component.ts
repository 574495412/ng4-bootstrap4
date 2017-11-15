import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {Router} from "@angular/router";
import {GlobalService} from "../global.service";
// A: 引入FileUpload模块
import {FileUploader,FileUploaderOptions } from "ng2-file-upload";
import { NgUploader, NgUploaderOptions } from "ng-uploader";
declare var $: any;

@Component({
  selector: 'app-publishactivities',
  templateUrl: './publishactivities.component.html',
  styleUrls: ['./publishactivities.component.css']
})
export class PublishActivitiesComponent implements OnInit {

  form = {username:'', group:'', price:-1, orginalPrice:-1, seatIndex:-1, stripeEmail:'', stripeToken: '', Systemlanguage: ''};
  content :string="";
  title:string="";
  longitudes:number=0; 
  latitudes:number=0; 
  link:string="";
  seatSelection:boolean=false;
  private DeadTime: string = '...'; //'...'; // 结束时间， 默认传三个点... 除非设置了日期就上传日期 String
  hideName :boolean=true;
  priceTicket:number=0; 
  language:string="";
  uploadExtraInfo:string="";
  type:string="ac";
  tags:Array<string> = [];
  online:boolean=false;
  mixPayment:boolean=false;
  default_currency: 'CAD';
  endsDate:string="";
  location:string="";
  connectAccount:string="";
  ticketNames: string[];
  ticketPrices: number[];
  ticketQuantities: number[];
  seats: any[];
  selectedSeatList: number[];
  //stripe: any;
  //elements: any;

  selectedListIndex: number;
  selectedSeat: number;
  userLanguage: string;
  userEmail : string;
  username : string;

  eventName = "event title";

  eventId = "595cf6e3362040fa495b7586";
  public uploader:FileUploader = new FileUploader({
    url: "https://www.chumi.co/Activity/uploadActivity/",
    // url:"https://www.chumi.co/Activity/uploadActivityNoImage",
    method: "POST",
    itemAlias: "cover",
    // maxFileSize:9,
    // headers :[{ name: 'withCredentials',value:'true'}]
});
  public cover: any = '';
  public activityPictures = [];
  options: FileUploaderOptions;
  constructor(private http: HttpService, private router:Router, private g:GlobalService,) { 
  
  }

  ngOnInit() {

    if(navigator.language == "zh-CN") {
      this.userLanguage = "Chinese";
      this.language= "Chinese";
    }
    else {
      this.userLanguage = "English";
      this.language= "English";
    }
    this.g.getUserInfo();

  }

// 定义事件，选择文件
selectedFileOnChanged(event:any) {
  console.log(event)
  
}
// 定义事件，上传文件
   publish(){
   
    this.cover = this.uploader.queue[0]._file;
    this.uploader.queue[0].withCredentials = true;
    // image array
    for (let i = 1; i < this.uploader.queue.length; i++ ) {
      this.uploader.queue[i].withCredentials = true;
      this.activityPictures.push(this.uploader.queue[i]._file);
    }
    this.uploader.queue[0].onBuildForm = (form) => {
      // form.append('cover', this.cover);
      for(let i of this.activityPictures){
        form.append('activityPictures', i);
      }
      // form.append('activityPictures', this.activityPictures);
      console.log(form)
      form.append('title', this.title);
      form.append('content', this.content);
      form.append('longitudes', this.longitudes);
      form.append('latitudes', this.latitudes);
      form.append('link', this.link);
      form.append('hideName', this.hideName);
      form.append('seatSelection', this.seatSelection); 
      form.append('uploadExtraInfo', this.uploadExtraInfo);  
      form.append('DeadTime', this.DeadTime);  
      form.append('priceTicket', this.priceTicket);
      form.append('language', this.language); 
      form.append('type', this.type);  
      form.append('tags', this.tags);
      form.append('online', this.online);
      form.append('mixPayment', this.mixPayment);
      form.append('default_currency',  GlobalService.data.default_currency);
      form.append('endsDate', this.endsDate);
      form.append('location', this.location);
      form.append('connectAccount', GlobalService.data.connectAccount);
      return form
     
    };
    console.log(this.uploader.queue[0])
    this.uploader.queue[0].upload();
    this.uploader.queue[0].onSuccess= function (response, status, headers) {
        // 上传文件成功
        if (status == 200) {
            // 上传文件后获取服务器返回的数据
            let tempRes = JSON.parse(response);
            console.log(tempRes);
            alert(tempRes[0].status)
        } else {
            // 上传文件后获取服务器返回的数据错误
            alert("");
        }
    };
   }
}
