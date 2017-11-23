import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { HttpService } from "../http.service";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [HttpService],
})
export class GroupComponent implements OnInit {

  private imghost = this.http.imghost;
  groupId = ''; //'58d485f570fe95565487d9e0'; // hardcode for now
  userId = GlobalService.data.userId;
  groupTitle = '';
  groupData: any = {};
  userList: any = [];
  groupUsers: any[] = [];

  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.groupId = params['groupId'];
    });

    // Get Group data from backend
    this.http.getGroupInfo(this.groupId).subscribe(
      data => {
        this.groupData = data;
        this.userList = data.userinfo;
        this.groupTitle = data.title;
        const n = this.userList.length;
        for (let i = 0; i < n; i++) {
          this.groupUsers.push(
            { 'userName': this.userList[i].username,
              'avatarImg': this.userList[i].thumb,
              'largeImg': this.userList[i].largeImg,
             });
        }
        console.log(this.groupTitle);
        console.log(this.groupData);
        console.log(this.userList.pop().userId);
        console.log(this.http.imghost);
        console.log(this.groupUsers.pop());
      },
      error => {
        alert(error);
      }
    );



    // Get user list from group data

  }

}

// export class User {
//   private userId: string;
//   private userName: string;
//   private avatarImg: string;
//   private largeImg: string;
//
//   constructor (
//     userName: string,
//     avatarImg: string,
//     largeImg: string) {}
// }

