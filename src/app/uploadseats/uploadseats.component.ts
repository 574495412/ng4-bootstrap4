import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

declare var $: any;

@Component({
  selector: 'app-uploadseats',
  templateUrl: './uploadseats.component.html',
  styleUrls: ['./uploadseats.component.css']
})
export class UploadSeatsComponent implements OnInit {

  form = {username:'', group:'', price:-1, orginalPrice:-1, seatIndex:-1, stripeEmail:'', stripeToken: '', Systemlanguage: ''};

  ticketNames: string[];
  ticketPrices: number[];
  ticketQuantities: number[];
  seats: any[];
  selectedSeatList: number[];
  //stripe: any;
  //elements: any;

  selectedListIndex: number;
  selectedSeat: number;
  userLanguage: string;
  userEmail : string;
  username : string;

  eventName = "event title";

  eventId = "595cf6e3362040fa495b7586";

  constructor(private http: HttpService) { }

  ngOnInit() {

    if(navigator.language == "zh-CN") {
      this.userLanguage = "Chinese";
    }
    else {
      this.userLanguage = "English";
    }
    $('.box').each(function (i)
    {
        $(this).click(function ()
        {
            $(this).toggleClass('active');
        })
    });
  }

  //   var stripe = Stripe('pk_live_fv6E5eo1rKZdm2F22cBJTRIF');
  //   var elements = stripe.elements();

  //   var card = elements.create('card', {
  //     hidePostalCode: true,
  //     style: {
  //       base: {
  //         iconColor: '#666EE8',
  //         color: '#31325F',
  //         lineHeight: '40px',
  //         fontWeight: 300,
  //         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //         fontSize: '15px',

  //         '::placeholder': {
  //           color: '#CFD7E0',
  //         },
  //       },
  //     }
  //   });
  //   card.mount('#card-element');

  //   var setOutcome = result => {
  //     var successElement = document.querySelector('.success');
  //     var errorElement = document.querySelector('.error');
  //     successElement.classList.remove('visible');
  //     errorElement.classList.remove('visible');

  //     if (result.token) {
  //       // Use the token to create a charge or a customer
  //       // https://stripe.com/docs/charges
  //       console.log(result.token);
  //       // successElement.querySelector('.token').textContent = result.token.id;
  //       // successElement.classList.add('visible');

  //       //console.log(this.form);

  //       var originalPrice = this.ticketPrices[this.selectedListIndex] * 100;

  //       this.form['group'] = this.eventId;
  //       this.form['username'] = this.username;
  //       this.form['price'] = originalPrice + Math.floor((originalPrice * 0.029 + 30)/(1-0.029));
  //       this.form['orginalPrice'] = originalPrice;
  //       this.form['seatIndex'] = this.selectedSeat;
  //       this.form['stripeEmail'] = this.userEmail;
  //       this.form['stripeToken'] = result.token.id;
  //       this.form['Systemlanguage'] = this.userLanguage;

  //       console.log(this.form);

  //       this.http.chargeCard(this.form).subscribe(
  //           data => {
  //               console.log(data);
  //               console.log(data.invoiceId);
  //           },
  //           error => {
  //               alert(error);
  //           }
  //       );

  //     } else if (result.error) {
  //       errorElement.textContent = result.error.message;
  //       errorElement.classList.add('visible');
  //     }
  //   }

  //   card.on('change', function(event) {
  //     setOutcome(event);
  //   });

  //   document.querySelector('form').addEventListener('submit', function(e) {
  //     e.preventDefault();
  //     var theform = document.querySelector('form');
  //     var extraDetails = {
  //       name: (<HTMLInputElement>theform.querySelector('input[name=cardholder-name]')).value,
  //       useremail: (<HTMLInputElement>theform.querySelector('input[name=user-email]')).value,
  //     };
  //     stripe.createToken(card, extraDetails).then(setOutcome);
  //   });

  //   this.http.getTicketInfo(this.eventId).subscribe(
  //       data => {
  //         this.ticketNames = data.name;
  //         this.ticketPrices = data.price;
  //         this.ticketQuantities = data.quantity;
  //         this.seats = data.seats;
  //         this.selectedSeatList = this.seats[0];

  //         console.log(this.ticketPrices);

  //       },
  //       error => {
  //           alert(error);
  //       }
  //   );
  // }

  // clickTicket(key) {
  //   this.selectedSeatList = this.seats[key];
  //   this.selectedListIndex = key;
  //   //this.selectedSeats = [];
  //   console.log(this.selectedListIndex);
  // }

  // buyTicket(key) {

  //   this.selectedSeat = key;
  //   console.log(this.selectedSeat);
  // }

  // onKeyEmail(event: any) { // without type info
  //   this.userEmail = event.target.value;
  // }

  // onKeyUsername(event: any) { // without type info
  //   this.username = event.target.value;
  // }

}
