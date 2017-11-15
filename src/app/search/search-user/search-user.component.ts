import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers: [HttpService]
})
export class SearchUserComponent implements OnInit {
  @Input() users=[];
  constructor(private http: HttpService, private router:Router) { }

  ngOnInit() {}

  navToMember(id){
    this.router.navigate(['member/'+id]);
  }

  getPhoto(url){

    if(url == ""){
      url = "user.png";
    }
    url=this.http.imghost+url;

    return url;
  }

}
