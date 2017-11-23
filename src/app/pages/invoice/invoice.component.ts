import { Component, OnInit, ChangeDetectorRef,NgZone } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [ HttpService ],
})
export class InvoiceComponent implements OnInit {

  private invoiceId = '';//'596c2ed653db18ff704783b7';
  private payer: string = '';
  private nowDate = new Date();
  private date: Date;
  private amount_due: number;
  private payTo: string;
  private titleitem: string;
  private groupId: string;
  private userId: string;
  private accountTemp: string;

  // join group
  private groupData = { groupid: '', groupname: ''};

  private num: number;
  private cd: NgZone;
  groupUsers: any[] = [];
  // const message on top
  private message1 = 'Congratulations! You have paid your ticket successfully. For next step:';
  private message2 = 'you can join the group chat for this event.' +
  ' We will keep updating information in the chat, please make sure you stay connected. We send this receipt to your email please check your in/spam/trash box.';

  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute,cd: NgZone) {this.cd = cd; }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log("ajdasljdaskdla"+params);
      this.invoiceId = params['invoiceId'];
      localStorage.setItem('invoiceId', this.invoiceId);
      this.userId = params['userId'];
      this.cd.runOutsideAngular(() => {
        this.http.getInvoice(this.invoiceId).subscribe(
          data => {


            this.payer = data.invoice.payer;
            this.date = data.invoice.date;
            this.titleitem = data.invoice.title;
            this.amount_due = data.invoice.amount_due / 100;
            this.cd.run(() => {

              document.getElementById("titleitem").innerHTML = data.invoice.title;
              document.getElementById("dateitem").innerHTML = data.invoice.date;
              document.getElementById("amount_due").innerHTML = this.amount_due + "";
              document.getElementById("joinbutton").setAttribute('href','/chat/user/'+this.userId+'/group/'+data.invoice.chargeItemId);
            });
            this.num = data.num;
            this.groupId = data.invoice.chargeItemId;
            // for join group, later to chat
            //
            const n = data.users.length;
            for (let i = 0; i < n; i++) {
              this.groupUsers.push(
                {
                  'userName': data.users[i].username,
                  'avatarImg': data.users[i].thumb
                });
            }
            this.groupData.groupid = this.groupId;
            this.groupData.groupname = this.titleitem;

            this.joinGroup();
            console.log('GroupId:' + this.groupId);
            console.log(this.num);
            console.log(this.payer);

            this.http.getUserInfoTempPass(this.userId).subscribe(
              data => {
                this.cd.run(() => {
                  this.accountTemp = "You now can use following email and password to login with 'Already bought tickets' on Chumi app." +
                    "Email: " + data.email + " temp password: " + data.password;
                });
              },
              error => {
                console.log(error);
              }
            );

          },
          error => {
            console.log(error);
          }
        );
      });
    });
    this.num = 1;

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
