import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from "../../http.service";
import {GlobalService} from "../../global.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-friend',
  templateUrl: './chat-friend.component.html',
  styleUrls: ['./chat-friend.component.css'],
  providers: [HttpService]
})
export class ChatFriendComponent implements OnInit {
  private current={
    _id:''
  };
  @Input() friendList=[];
  @Output() triggerMessage = new EventEmitter();
  private imghost = this.http.imghost;

  constructor(private http:HttpService, private router:Router) { }

  ngOnInit() {

  }

  clickFriend(friend){
    console.log(friend);
    this.current = friend;
  }
  clickMessage(){
    this.triggerMessage.emit(this.current);
  }

  clickDetail(){
    this.router.navigate(['member/' + this.current._id]);
  }
}
