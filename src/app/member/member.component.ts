import { Component, OnInit, Injectable } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../http.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [HttpService],
})
export class MemberComponent implements OnInit {
  userId: number;
  userName: string;
  cityToLive: string;
  occupation: string;
  description: string;
  userPhotoUrl: string;
  postCount: number;
  myCircle: number;
  following: number;
  genderImgUrl: string;
  cachedId: string;
  myCircleData: Array<Object>;
  myfollowingCircleData: Array<Object>;

  maleImgUrl = "/assets/img/male.png";
  femaleImgUrl = "/assets/img/female.png";
  photoServerUrl = "http://dhjjgq45wu4ho.cloudfront.net/";

  constructor(private router: Router,private http: HttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.cachedId = localStorage.getItem('id_token');

    //console.log(this.cachedId);

    this.route.params.forEach((params: Params) => {
      console.log(params);
      this.userId = params['userId'];
    });

    if(this.userId != null){
      this.loadFromId();
    }else{
      //CHECK ALERADY HAVE DATA
    }


    this.http.getMyCircleInfo(this.userId).subscribe(
        data => {
          this.myCircleData = data;
          console.log(this.myCircleData);
        },
        error => {
            alert(error);
        }
    );

    this.http.getMyFollowingCircleInfo(this.userId).subscribe(
        data => {
          this.myfollowingCircleData = data;
          //console.log(this.myfollowingCircleData);
        },
        error => {
            alert(error);
        }
    );

  }

  redirect(item) {
    console.log(item._id);
    this.router.navigate(['/circle', item._id]).then(() => location.reload());
  }

  loadFromId(){
    this.http.getUserInfo(this.userId).subscribe(
      data => {
        this.userName = data.username;
        this.cityToLive = data.cityToLive;
        this.occupation = data.occupation;
        if(data.description != "") {
          this.description = data.description;
        }else{
          this.description = "大家好,我是"+data.username+"!";
        }
        this.userPhotoUrl = data.userPhoto;
        this.postCount = +data.acTotalNumberCount;
        this.myCircle = +data.myVipChannel.length;
        this.following = +data.vipTags.length - 1;
        this.userPhotoUrl = this.photoServerUrl + data.userPhoto;
        this.genderImgUrl = this.femaleImgUrl;
        if(data.gender == "Male") {
          this.genderImgUrl = this.maleImgUrl;
        }
        else {
          this.genderImgUrl = this.femaleImgUrl;
        }
      },
      error => {
        alert(error);
      }
    );
  }

}
