import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [HttpService]
})
export class SearchComponent implements OnInit {
  private searchText;
  private feedActive='active';
  private userActive='';
  private circleActive='';

  private feeds=[];
  private users=[];
  constructor(private route:ActivatedRoute, private http:HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.searchText = params['searchText'];
      }
    );
    if(this.users.length==0){
      this.http.searchPost(this.searchText,0).subscribe(
        data => {
          console.log(data);
          this.feeds = data.feed;
          this.users = data.users;
        }
      );
    }
  }
  changeTab(tab){
    if(tab=='feed'){
      this.feedActive='active';
      this.userActive='';
      this.circleActive='';
    }else if(tab=='user'){
      this.feedActive='';
      this.userActive='active';
      this.circleActive='';
    }else{
      this.feedActive='';
      this.userActive='';
      this.circleActive='active';
    }
  }

}
