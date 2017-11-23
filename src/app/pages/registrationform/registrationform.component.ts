import { Component, OnInit,Injectable} from '@angular/core';
import { HttpService } from "../http.service";
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {GlobalService} from "../global.service";
declare var $: any;
export interface registrationElement {
  question: string;
  type:string;
  answers: any[];
}
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})

@Injectable()
export class RegistrationFormComponent implements OnInit {

  form = {username:'', group:'', price:-1, orginalPrice:-1, seatIndex:-1, stripeEmail:'', stripeToken: '', Systemlanguage: ''};
  content :string="";
  title:string="";
  longitudes:number=0; 
  latitudes:number=0; 
  link:string="";
  seatSelection:boolean=false;

  selectedSeatList: number[];
  //stripe: any;
  //elements: any;

  selectedListIndex: number;
  selectedSeat: number;
  userLanguage: string;
  userEmail : string;
  username : string;

  types:string[]=['单选题','复选题','填写题'];

  registrationForm: registrationElement[] = [
    {type:'单选题',  question:"", answers:[{answer:''}]},
   
  ];
  // registrationForm: any[];
  constructor(private http: HttpService, private router:Router, private g:GlobalService,) { 
  
  }

  ngOnInit() {

    if(navigator.language == "zh-CN") {
      this.userLanguage = "Chinese";
    }
    else {
      this.userLanguage = "English";
    }
    this.g.getUserInfo();
    var form_combined_selector = '.form-type-combine .form-group, .form-type-combine.form-group, .form-type-combine .input-group-input';
    $(document).on('click', form_combined_selector, function(){
		  $(this).find('.form-control').focus();
		});
		$(document).on('focusin', form_combined_selector, function(){
		  $(this).addClass('focused');
		});
		$(document).on('focusout', form_combined_selector, function(){
		  $(this).removeClass('focused');
    });
    
  }
  getKeys(item){
    return Object.keys(item);
  }

  setType(type){
   
  }
  addAnswer(index){
  let answers=[]
    for(let i of this.registrationForm[index].answers){
      answers.push(i)
    }
    answers.push({answer:''})
    console.log(answers)
    this.registrationForm[index].answers=answers;
  }
  addQuestion(){
  this.registrationForm.push({type:'单选题',  question:'', answers:[{answer:''}]}) 
  }
  resetForm(index){
    this.registrationForm[index]={type:'单选题',  question:'', answers:[{answer:''}]}
    console.log(this.registrationForm)
  }
  // 保存问卷
  saveRegistrationForm():void{
    console.log(this.registrationForm)
    let Form={
      acID:"599290ced9a1f30043a16a84",
      questions: [],
      types: [],
      defined_answers: []
    }
    for( let item of this.registrationForm){
        Form.questions.push(item.question);
        if(item.type=="单选题"){
          Form.types.push("singleSelect")
        }else if(item.type=="复选题"){
          Form.types.push("multipleSelect")
        }else if(item.type=="填写题"){
          Form.types.push("text")
        }
        let answers=[]
        for(let i of item.answers){
          answers.push(i.answer)
        }
        Form.defined_answers.push(answers)
    }
    this.http.createOrEditRegistrationForm(Form).subscribe(
              result => {
                // console.log(result)
              },
              error => {
                console.log('Create or Edit to RegistrationForm failed'+error);
              }
            );
    }
}
