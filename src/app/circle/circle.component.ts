import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { HttpService } from "../http.service";
import { Title } from "@angular/platform-browser";


declare var run: any;

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
  providers: [HttpService]
})
export class CircleComponent implements OnInit {
  circleId: number;
  postNum: number;
  followersNum: number;
  icon: string;
  channelName: string;
  creatorName: string;
  des: string;
  price: number;
  isFree: boolean;
  methodText: string;
  hidePayButtonClass: string;
  value=false;

  photoServerUrl = "http://dhjjgq45wu4ho.cloudfront.net/";
  freeDes = "这个圈子是免费公开的";
  notFreeDes = "这个圈子是私有的， 变成一个会员， 你会每三个月自动支付组织者一次帮助举办线上线下活动";
  shareTitle = "分享小密圈 - ";

  constructor(private http: HttpService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.circleId = params['circleId'];
    });

    this.http.getCircleInfo(this.circleId).subscribe(
        data => {
          console.log(data);
          this.icon = this.photoServerUrl + data.cover;
          this.channelName = data.channelId;
          this.shareTitle += this.channelName;
          this.creatorName = data.uid.username;
          this.des = data.des;
          this.price = +data.price;
          this.isFree = true;
          this.methodText = this.freeDes;
          this.hidePayButtonClass = "hide-pay-button";
          if(data.price > 0)
          {
            this.isFree = false;
            this.methodText = this.notFreeDes;
            this.hidePayButtonClass = "";
          }
          //alert(this.channelName);
          new run();
        },
        error => {
            alert(error);
        }
    );

    this.http.getCircleAdditionalInfo(this.circleId).subscribe(
        data => {
          this.postNum = data.post;
          this.followersNum = data.followers;
        },
        error => {
            alert(error);
        }
    );
  }

  shareThisCircle () {
    console.log("shareThisCircle");
  }

}
