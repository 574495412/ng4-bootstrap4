import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { HttpService } from '../http.service';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-activeSuccess',
  templateUrl: './activeSuccess.component.html',
  styleUrls: ['./activeSuccess.component.css']
})
export class ActiveSuccessComponent implements OnInit {

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

  }


}
