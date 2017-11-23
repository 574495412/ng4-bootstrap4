import {Component, OnInit, Output, Input, EventEmitter, AfterViewChecked} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GlobalService} from "../../global.service";

declare var $: any;
@Component({
  selector: 'app-chat-mobile',
  templateUrl: './chat-mobile.component.html',
  styleUrls: ['./chat-mobile.component.css']
})
export class ChatMobileComponent implements OnInit {
  // @Input() target = '';
  @Input() messages = [];
  @Input() target = {};
  @Input() my = {};
  @Output() sendMessage = new EventEmitter();
  private myMessage = "";
  private _setIntervalHandler: any;

  public invoicId = '';
  public isFreeEvent = true;

  private linkToInvoice = '';
  trans:TranslateService;

  constructor(translate:TranslateService) {this.trans = translate;

    //是不是pc
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    if(flag == true){
      var txt;
      var r = confirm("PC version of event group chat coming soon! You can press 'Ok' to download app or keep using mobile web chat.");
      if (r == true) {
        window.location.href = "http://www.chumi.co/app";
        return;
      } else {

      }
    }
  }

  ngOnInit() {


    if (localStorage.getItem('isFreeEvent') === 'No') {
      this.isFreeEvent = false;
      this.invoicId = localStorage.getItem('invoiceId');
      this.linkToInvoice = '/invoice/'+ this.invoicId +'/user/' + this.my['id'];//{{my.id}}

    }; //else {
    //   this.linkToInvoice = '/group/'+ this.target['id'];
    // }
    var bfscrolltop = document.body.scrollTop;
    var that = this;
    var interval: any;
    let div = document.getElementById('titleconnect');
    div.innerHTML = "Connecting ...";
    let div2 = document.getElementById('sendbutton');
    div2.style.color = "gray";



    $(".myMessage").focus(function(){
      // $('input-box').style.marginBottom = '300px';
      this.interval = setInterval(function(){
        document.body.scrollTop = document.body.scrollHeight ;
        // $('input-box').css({marginTop: '-=500px'});
        // document.getElementById('input-box').scrollTop = document.body.scrollHeight + 400;
      }, 80);
    });
    $(".myMessage").blur(function(){
      clearInterval(interval);
      document.body.scrollTop = bfscrolltop;
    });

    var x  = this.trans;
    var intervaltitle = setInterval(function(){
      if(GlobalService.data.loading == false) {
          x.get('eventgroupchat').subscribe((res:string) => {
          div.innerHTML = res;
            div2.style.color = "black";
          clearInterval(intervaltitle);
        });
      }
    }, 80);
  }

  setInterval() {
    this._setIntervalHandler = setInterval(() => {
      document.body.scrollTop = document.body.scrollHeight;
    }, 200);
  }

  pressKey(key){
    if(key.key=='Enter'){
      this.sendMessage.emit(this.myMessage);
      this.myMessage="";
    }
  }

  // adjustPage(event){
  //   var inputTextBox = document.getElementById('chat-window-input-box');
  //   setInterval(function(){
  //     inputTextBox.scrollIntoView(false);
  //     // inputTextBox.scrollIntoView(true);
  //     // inputTextBox.scrollIntoViewIfNeeded();
  //   },200);
  // }

  onSentMsgBtnClick(event) {
    this.sendMessage.emit(this.myMessage);
    this.myMessage = ' ';
    // setTimeout(function(){
    //   this.scrollDown();
    // },200)

  }



  scrollDown(){
    document.getElementById('window').scrollTop=document.getElementById('window').scrollHeight+60;
    // let div = document.getElementById('window');
    // console.log(div.scrollHeight)
    // div.scrollTop = div.scrollHeight+30;
    // // document.getElementById('window').scrollIntoView(false);
    // // document.getElementById('window').scrollTop = document.getElementById('input-box').offsetHeight + 30;
  }
}
