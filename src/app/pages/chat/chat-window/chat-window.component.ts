import {Component, OnInit, Input, Output, EventEmitter, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, AfterViewChecked{
  @Input() messages = [];
  @Input() target = {};
  @Output() sendMessage = new EventEmitter();
  private myMessage="";
  constructor() { }

  ngOnInit() {
    // switch (message.messageType) {
    //   case RongIMClient.MessageType.TextMessage:
    //     message.isMyInput=false;
    //     this.messages.push(message);
    //     break;
    //   case RongIMClient.MessageType.VoiceMessage:
    //     // 对声音进行预加载
    //     // message.content.content 格式为 AMR 格式的 base64 码
    //     break;
    //   case RongIMClient.MessageType.ImageMessage:
    //     // message.content.content => 图片缩略图 base64。
    //     // message.content.imageUri => 原图 URL。
    //     break;
    //   case RongIMClient.MessageType.DiscussionNotificationMessage:
    //     // message.content.extension => 讨论组中的人员。
    //     break;
    //   case RongIMClient.MessageType.LocationMessage:
    //     // message.content.latiude => 纬度。
    //     // message.content.longitude => 经度。
    //     // message.content.content => 位置图片 base64。
    //     break;
    //   case RongIMClient.MessageType.RichContentMessage:
    //     // message.content.content => 文本消息内容。
    //     // message.content.imageUri => 图片 base64。
    //     // message.content.url => 原图 URL。
    //     break;
    //   case RongIMClient.MessageType.InformationNotificationMessage:
    //     // do something...
    //     break;
    //   case RongIMClient.MessageType.ContactNotificationMessage:
    //     // do something...
    //     break;
    //   case RongIMClient.MessageType.ProfileNotificationMessage:
    //     // do something...
    //     break;
    //   case RongIMClient.MessageType.CommandNotificationMessage:
    //     // do something...
    //     break;
    //   case RongIMClient.MessageType.CommandMessage:
    //     // do something...
    //     break;
    //   case RongIMClient.MessageType.UnknownMessage:
    //     // do something...
    //     break;
    //   default:
    //     // do something...
    //     break;
    // }
  }
  pressKey(key){
    if(key.key=='Enter'){
      this.sendMessage.emit(this.myMessage);
      this.myMessage="";
      this.scrollDown();
    }
  }

  onSentMsgBtnClick(event){

      this.sendMessage.emit(this.myMessage);
      this.myMessage="";
      this.scrollDown();
  }
  ngAfterViewChecked(){
    this.scrollDown();
  }
  scrollDown(){
    document.getElementById('window').scrollTop=document.getElementById('window').scrollHeight;
  }
}
