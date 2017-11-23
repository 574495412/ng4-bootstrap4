import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
  @Input() data;
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
