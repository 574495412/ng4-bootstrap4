import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-search-feed',
  templateUrl: './search-feed.component.html',
  styleUrls: ['./search-feed.component.css'],
  providers: [HttpService]
})
export class SearchFeedComponent implements OnInit {
  @Input() feeds;
  constructor(private http:HttpService) { }

  ngOnInit() {
  }
  getImg(url){
    if(url.indexOf('http')<0){
      url=this.http.imghost+url;
    }
    return url;
  }

  getPhoto(url){

    if(url == ""){
      url = "user.png";
    }
      url=this.http.imghost+url;

    return url;
  }
}
