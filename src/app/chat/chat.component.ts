import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import '../../assets/js/RongIMLib-2.2.5.min.js';
import {GlobalService} from "../global.service";
//import '../../assets/js/protobuf-2.1.5.min.js';
declare var RongIMLib: any;
//declare var protobuf: any;


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [HttpService]
})
export class ChatComponent implements OnInit {

  private rongApiKey = 'c9kqb3rdki5pj';
  private rongTokenStr: any;
  private instance:any;
  private isMobile = true;

  private imghost = this.http.imghost;


  private isChat = true;

  private userList = [];
  private messages = [];
  private friendList = [];

  private target = {
    id:'',
    name:'',
    icon:''
  };
  private my = {
    id: '',//GlobalService.data.userId,
    name: '',// GlobalService.data.username,
    icon: GlobalService.data.userImg,
  };

  constructor(private http: HttpService, private router: Router, private g: GlobalService, private route: ActivatedRoute) {}

  updateConvList(){
    let m = this.getMessages();
    this.userList = m.slice().reverse();
  }
  updateMessageWindow(){
    let m = this.getMessages();
    this.messages=[];
    for(let i=0;i<m.length;i++){
      console.log(m[i].target.id + " " +this.target.id);
      if(m[i].target.id==this.target.id){
        this.messages = m[i].messages;
      }
    }
  }
  changeUser(target){
    this.target = target;
    this.updateMessageWindow();
  }

  // testSendGroupMessage(message) {
  //   // set content
  //   let msg = new RongIMLib.TextMessage({
  //     content:message,
  //     user : this.my,
  //   });
  //
  //   let instance = RongIMLib.RongIMClient.getInstance();
  //   instance.sendMessage(3,'596c2ed653db18ff704783b7', msg, {
  //     onSuccess: message => {
  //       console.log('Send message on group'+ message.content);
  //     },
  //     onError: (errorCode, message) => {
  //       console.log('send group message failed!');
  //       console.log(errorCode);
  //     }
  //
  //   });
  // }

  sendMessage(message) {
    let msg = new RongIMLib.TextMessage({
      content:message,
      user : this.my,
    });
    let instance = RongIMLib.RongIMClient.getInstance();
    //instance.sendMessage(RongIMLib.ConversationType.PRIVATE, this.target.id, msg, {
    //private chat
    instance.sendMessage(RongIMLib.ConversationType.GROUP, this.target.id, msg, {
      onSuccess: message => {
        this.setMessages(message, this.target);
        console.log(message.content);
        console.log( this.target);
      },
      onError: (errorCode, message) => {
        console.log(message.content);
        console.log(errorCode);
      }
    });
    // instance.sendMessage(RongIMLib.ConversationType.GROUP, "596c2ed653db18ff704783b7", msg, {
    //   onSuccess: message => {
    //     this.setMessages(message,"596c2ed653db18ff704783b7");
    //   },
    //   onError: (errorCode, message) => {
    //     console.log(message);
    //     console.log(errorCode);
    //   }
    // });
  }

  ngOnInit() {
    GlobalService.data.loading = true;
    let agent = window.navigator.userAgent;
    this.route.params.forEach((params: Params) => {
      // alert(params['userId']);
      // alert(params['groupId']);
      this.target.id = params['groupId'];
      this.my.id = params['userId'];
      this.http.getUserInfo(this.my.id).subscribe(
        data => {
          this.my.name = data.username;
          this.my.icon = this.imghost + data.thumb;
          console.log(this.my.icon);

        },
        error => {
          console.error('Error on geting username an photo for chat'+ error);
        }
      );
      this.http.getFakeCommunicationData('English', this.target.id).subscribe(
        data => {
          for (let message of data){
            this.messages.push(message);
          }
          console.log(this.messages);
        },
        error => {
          console.error('Error on getting  Event Assistant Robot Data' + error);
        }
      );
      this.updateMessageWindow();
      // if(params['groupId']){
      //   this.http.getActivityById(params['groupId']).subscribe(
      //     data => {
      //       console.log(data);
      //       let info={
      //         groupid:params['groupId'],
      //         groupname:data.title
      //       };
      //       this.http.joinGroup(info).subscribe(
      //         result => {
      //           this.target={
      //             id:params['groupId'],
      //             name:data.title,
      //             icon:''
      //           };
      //           this.updateMessageWindow();
      //         },
      //         error => {
      //           // alert(error);
      //           console.log('Add to group failed'+error);
      //         }
      //       );
      //     },
      //     error => {
      //       // alert(error);
      //       console.log(error);
      //     }
      //   );
      // }
    });

    if (agent.toLowerCase().includes('iphone') || agent.toLowerCase().includes('android')){
      this.isMobile = true;
    }

    // this.g.dataChange.subscribe((value) => {
    //   this.my = {
    //     id:value.userId,
    //     name:value.username,
    //     icon:value.userImg
    //   };
    // });


    this.updateConvList();
    // fetch from node.js backend to get RongCloud token
    // this.rongTokenStr = localStorage.getItem('rongCloud_token');
    if (true) {
      this.http.getRongCloudToken().subscribe(
        data => {
          localStorage.setItem('rongCloud_token', data[0].message.toString());
          console.log(localStorage.getItem('rongCloud_token'));
          this.rongTokenStr = data[0].message.toString();
          this.initRongIM();
        },
        error => {
          // alert(error);
          console.error(error);
        }
      );
    }else{
      // this.initRongIM();
    }



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

    RongIMClient.setOnReceiveMessageListener({
      onReceived: message => {
        this.setMessages(message,message.content.user);
      }
    });

    RongIMClient.connect(this.rongTokenStr, {
      onSuccess: userId => {
        console.log('connection success, userId:' + userId);
        GlobalService.data.loading = false;
        this.instance = RongIMClient.getInstance();
        // this.instance.sendMessage(3,'58d485f570fe95565487d9e0', new RongIMLib.TextMessage({
        //   content:"Angular says hi",
        //   user : this.my,
        // }), {
        //   onSuccess: message => {
        //     console.log('Send message on group success!');
        //   },
        //   onError: (errorCode, message) => {
        //     console.log('send group message failed!');
        //     console.log(errorCode);
        //   }
        //
        // });
      },
      onTokenIncorrect: function() {
        console.log('token invilide');
      },
      onError: function(errorCode) {
        let info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = 'Over time';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = 'Unknown Error';
            break;
        }
        console.log(info);
      }
    });

    //this.http.getFriends().subscribe(
    //  data => {
    //    this.friendList=data;
    //    console.log(data);
    //  },
    //  error => {
    //    // alert(error);
    //    console.error(error);
    //  }
    //);
  }
  scrollDown(){
    document.getElementById('window').scrollTop=document.getElementById('window').scrollHeight+60;
  }
  setMessages(message,t){
    let msgStr = localStorage.getItem(GlobalService.data.userId+"_msg");
    let msgObj=((!msgStr) ? []:JSON.parse(msgStr));
    let flag=false;
    for(let i=0;i<msgObj.length;i++){
      if(msgObj[i].target.id){
        if(message) {
          msgObj[i].messages.push(message);
        }
        flag=true;
      }
    }
    if(message){
      message=[message];
    }else{
      message=[];
    }
    if(!flag){
      msgObj.push({
        target:t,
        messages:message
      })
    }
    localStorage.setItem(GlobalService.data.userId+"_msg",JSON.stringify(msgObj));
    this.updateConvList();
    this.updateMessageWindow();
    console.log('接受到信息');
    setTimeout(()=>this.scrollDown(),200);
  }

  getMessages(){
    let msgs = localStorage.getItem(GlobalService.data.userId+"_msg");
    if(!msgs){
      msgs='[]';
    }
    return JSON.parse(msgs);
  }
  clickFriend(){
    this.isChat = false;
  }

  clickChat(){
    this.isChat = true;
  }

  triggerMessage(user){
    let t = {
      id:user._id,
      name:user.username,
      icon:user.thumb
    };
    this.target = t;
    this.setMessages(null,t);
    this.isChat = true;
  }
}
