import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import '../../assets/js/RongIMLib-2.2.5.min.js';
import { GlobalService } from "../global.service";
declare var RongIMLib: any;


@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.css']
})
export class GroupchatComponent implements OnInit {

  private rongApiKey = 'c9kqb3rdki5pj';
  private rongTokenStr: any;
  private instance: any;

  // group info
  private groupId = '58d485f570fe95565487d9e0'; // hardcode for now
  private groupTitle = '';

  // user info
  private my = {
    id: GlobalService.data.userId,
    name: GlobalService.data.username,
    icon: GlobalService.data.userImg
  };

  constructor(private http: HttpService, private router: Router,
              private g: GlobalService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.initRongIM();
  }

  // Init RongIMlib
  initRongIM() {
    let RongIMClient = RongIMLib.RongIMClient;
    RongIMClient.init(this.rongApiKey);
    RongIMClient.setConnectionStatusListener({
      onChanged: function (status) {
        switch (status) {
          case RongIMLib.ConnectionStatus.CONNECTED:
            console.log("connected!");
            break;
          case RongIMLib.ConnectionStatus.CONNECTING:
            console.log('I am working on connecting to RongCloud.');
            break;
          case RongIMLib.ConnectionStatus.DISCONNECTED:
            console.log('Disconnected');
            break;
        }
      }
    });
  }

}
