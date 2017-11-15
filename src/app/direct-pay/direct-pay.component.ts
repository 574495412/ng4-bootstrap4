import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from "@angular/router";
import { HttpService } from "../http.service";
import { GlobalService } from '../global.service'

declare var Stripe: any;
declare var $: any;
declare var run: any;

@Component({
  selector: 'app-direct-pay',
  templateUrl: './direct-pay.component.html',
  styleUrls: ['./direct-pay.component.css']
})
export class DirectPayComponent implements OnInit {

  ticketId: string;
  eventId: string;
  creatorName: string;
  icon: string;
  ticketName: string;
  ticketRemain: number;
  ticketPrice: number;
  addtionalFee: number;
  totalPrice: number;
  userLanguage: string;
  userEmail : string;
  username : string;
  title : string;
  currency : string;
  paymentModel = { email: '', name: ''};
  form = {username:'', group:'', price:-1, orginalPrice:-1, seatIndex:-1, stripeEmail:'', stripeToken: '', Systemlanguage: ''};
  photoServerUrl = "https://dhjjgq45wu4ho.cloudfront.net/";

  // join group
  private groupData = { groupid: '', groupname: ''};

  constructor(private g: GlobalService, private route: ActivatedRoute, private http: HttpService, private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.ticketId = params['ticketId'];

      console.log("id: " + this.ticketId);

      this.http.ticketDirectInfo(this.ticketId).subscribe(
          data => {
            console.log(data);

            this.eventId = data.aic;
            this.ticketName = data.name[0];
            this.ticketRemain = data.quantity[0];
            this.ticketPrice = data.price[0];
            this.addtionalFee = this.calculateFee(this.ticketPrice);
            this.totalPrice = this.ticketPrice + this.addtionalFee;
            this.currency = data.default_currency;
            this.http.getEventInfo(this.eventId).subscribe(
              data => {
                console.log(data);
                this.creatorName = data._creator.username;
                this.icon = this.photoServerUrl + data._creator.userPhoto;

                this.groupData.groupname = data.title;
                this.title = data.title;

                console.log(this.creatorName);
                console.log(this.icon);

              },
              error => {
                  alert(error);
              }
          );


          },
          error => {
              alert(error);
          }
      );

    });
  }


  ngOnInit() {
    if(navigator.language == "zh-CN") {
      this.userLanguage = "Chinese";
    }
    else {
      this.userLanguage = "English";
    }

    var stripe = Stripe('pk_live_fv6E5eo1rKZdm2F22cBJTRIF');
    var elements = stripe.elements();

    var card = elements.create('card', {
      hidePostalCode: true,
      style: {
        base: {
          iconColor: '#666EE8',
          color: '#31325F',
          lineHeight: '40px',
          fontWeight: 300,
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSize: '15px',

          '::placeholder': {
            color: '#CFD7E0',
          },
        },
      }
    });
    card.mount('#card-element');

    var setOutcome = result => {
      var errorElement = document.querySelector('.error');
      errorElement.classList.remove('visible');

      if (result.token) {
        // Use the token to create a charge or a customer
        // https://stripe.com/docs/charges
        // successElement.querySelector('.token').textContent = result.token.id;
        // successElement.classList.add('visible');

        //console.log(this.form);

        this.form['group'] = this.eventId;
        this.form['username'] = this.username;
        this.form['price'] = this.totalPrice*100;
        this.form['orginalPrice'] = this.ticketPrice*100;
        this.form['seatIndex'] = 0;
        this.userEmail = this.userEmail.replace(/\s/g, '');
        this.form['stripeEmail'] = this.userEmail;
        this.form['stripeToken'] = result.token.id;
        this.form['Systemlanguage'] = this.userLanguage;
        this.form["acWebId"] = this.eventId;

        this.http.chargeCard(this.form).subscribe(
            data => {
                console.log("TYITIT"+data);
                console.log(data.invoiceId);
                //支付成功跳转 invoice/:invoiceId
                let userId = data.userId;
                localStorage.setItem('id_token', userId);
                this.g.getUserInfo();
                GlobalService.data.userId = data.userId;
                this.joinGroup();
                localStorage.setItem(GlobalService.data.isFreeEvent, 'No');
                localStorage.setItem(GlobalService.data.invoiceId, data.invoiceId);
                this.router.navigateByUrl(`/invoice/${data.invoiceId}/user/${userId}`);

            },
            error => {
                alert("Something wrong with payment, please try again.");
            }
        );

      } else if (result.error) {
        errorElement.textContent = result.error.message;
        errorElement.classList.add('visible');
      }
    }

    card.on('change', function(event) {
      setOutcome(event);
    });

    document.querySelector('.payform').addEventListener('submit', function(e) {
      e.preventDefault();
      var theform = document.querySelector('.payform');
      var extraDetails = {
        name: (<HTMLInputElement>theform.querySelector('input[name=cardholder-name]')).value,
        useremail: (<HTMLInputElement>theform.querySelector('input[name=user-email]')).value,
      };

      var r = confirm("Ready to pay? ");
      if (r == true) {
        stripe.createToken(card, extraDetails).then(setOutcome);
      } else {

      }
    });

    this.groupData.groupid = this.eventId;
    this.groupData.groupname = this.title;
  }

  calculateFee(originalPrice) {
    return Math.floor((originalPrice * 100 * 0.045 + 50))/100;
  }

  onKeyEmail(event: any) { // without type info
    this.userEmail = event.target.value;
  }

  onKeyUsername(event: any) { // without type info
    this.username = event.target.value;
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
