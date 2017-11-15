import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {ActivatedRoute, Params, NavigationExtras} from "@angular/router";
import {GlobalService} from "../../global.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [HttpService]
})
export class CardComponent implements OnInit {
  userInfo:any;
  data:any;
  imgHost:string;
  constructor(private http: HttpService,private route: ActivatedRoute,private router: Router, private g:GlobalService) { }

  ngOnInit() {
    this.imgHost = this.http.imghost;
    this.userInfo = GlobalService.data;
    this.getData();

    this.g.dataChange.subscribe((value) => {
      console.log(value);
      this.userInfo = value;
      this.getData();
    });
  }

  getData(){
    var tag;
    if(this.userInfo.isSigned){
      tag = 'All';
    }else {
      tag = 'globalhot';
    }
    this.http.getFeedFromTag(0, this.userInfo.language, this.userInfo.location.lat, this.userInfo.location.long, Date.now(),tag, 0).subscribe(
      data => {
        this.data = data;
        console.log('aaasdfasdfasdf');
        console.log(this.data);
        for (var i = 0; i < this.data.feed.length; i++) {

          if(this.data.feed[i].cover.indexOf('http')==-1){
            this.data.feed[i].cover = this.http.imghost+this.data.feed[i].cover;

          }

          if(this.data.feed[i]._creator.userPhoto == ""){
            this.data.feed[i]._creator.userPhoto = "user.png";
          }
          this.data.feed[i]._creator.userPhoto = this.http.imghost+this.data.feed[i]._creator.userPhoto;
        }

        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  redirectMember(item) {

    this.router.navigate(['/member', item._creator._id]).then(() => location.reload());

  }

}
