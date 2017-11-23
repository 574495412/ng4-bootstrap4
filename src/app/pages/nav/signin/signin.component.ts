import { Component, Output, EventEmitter } from '@angular/core';
import {HttpService} from "../../http.service";
import {Router} from "@angular/router";
import {GlobalService} from "../../global.service";
// import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['../nav.component.css'],
    providers: [HttpService]
})
export class SigninComponent{

    form = {email:'', password:''};
    // errorMsg = '';
    // invalid = false;
    @Output() switchView = new EventEmitter();
    @Output() closeSign = new EventEmitter();

    constructor(private http: HttpService, private router:Router, private g:GlobalService) { }

    //todo:不用reload刷新，用户体验更好
    //todo:error message
    signin() {
        this.http.postSignin(this.form).subscribe(
            data => {
                localStorage.setItem('id_token', data[0].message);
                this.g.getUserInfo();
                this.closeSign.emit();
                // location.reload();
            },
            error => {
                alert(error);
            }
        );
    }
    switchToSignup(){
        this.switchView.emit();
    }

}
