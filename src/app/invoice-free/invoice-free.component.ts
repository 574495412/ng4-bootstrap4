import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { HttpService } from '../http.service';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-invoice-free',
  templateUrl: './invoice-free.component.html',
  styleUrls: ['./invoice-free.component.css']
})
export class InvoiceFreeComponent implements OnInit {

  private title: string;
  private groupId: string;
  private groupUsers: any[] = [];

  userList: any = [];
  userId = GlobalService.data.userId;

  // join group
  private groupData = { groupid: '', groupname: ''};

  private num: number;

  // const message on top
  private message = 'Congratulations! You have joined the event successfully. For next step:';
  private message2 = 'You can join the group chat for this event.' +
    ' We will keep updating information in the chat, please make sure you stay connected. We send this receipt to your email please check your in/spam/trash box.';

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
        this.title = data.title;
        this.num = this.userList.length;
        const n = this.userList.length;
        for (let i = 0; i < n; i++) {
          this.groupUsers.push(
            { 'userName': this.userList[i].username,
              'avatarImg': this.userList[i].thumb,
              'largeImg': this.userList[i].largeImg,
            });
        };
        console.log(this.groupData);
        console.log(this.userList.pop().userId);
        console.log(this.http.imghost);
        console.log(this.groupUsers.pop());
      },
      error => {
        alert(error);
      }
    );
  }

  joinGroup() {
    this.http.joinGroup(this.groupData).subscribe(
      data => {
        console.log('join group successfully!');
      },
      error => {
        console.log('Join group error');
      }
    );
  }

}
