import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, BrowserXhr, Http} from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SwiperComponent } from './home/swiper/swiper.component';
import { CardComponent } from './home/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './nav/signin/signin.component';
import { SignupComponent } from './nav/signup/signup.component';
import { MemberComponent } from './member/member.component';
import { CircleComponent } from './circle/circle.component';
import { RouterModule } from "@angular/router";
import { DisplayDate } from './pipe/displayDate.pipe';
import { HttpService } from "./http.service";
import { SearchComponent } from './search/search.component';
import { CenterComponent } from './center/center.component';
import { MessageComponent } from "./center/message/message.component";
import { FriendComponent } from './center/friend/friend.component';
import { CreateComponent } from './create/create.component';

import { ChatComponent } from './chat/chat.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { SearchFeedComponent } from './search/search-feed/search-feed.component';
import { SearchUserComponent } from './search/search-user/search-user.component';
import { SearchCircleComponent } from './search/search-circle/search-circle.component';

import { TickettestComponent } from './tickettest/tickettest.component';
import { TicketDatailsComponent } from './ticketdetails/ticketdatails.component';
import { UploadSeatsComponent } from './uploadseats/uploadseats.component';
import { PublishActivitiesComponent } from './publishactivities/publishactivities.component';
import { MergeArrayPipe } from './pipe/merge-array.pipe';
import { PostComponent } from './post/post.component';
import { ChatFriendComponent } from './chat/chat-friend/chat-friend.component';
import { GroupComponent } from './group/group.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ChatMobileComponent } from './chat/chat-mobile/chat-mobile.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { InvoiceFreeComponent } from './invoice-free/invoice-free.component';
import { ActiveSuccessComponent } from './activeSuccess/activeSuccess.component';
import { CalculateFeePipe } from './pipe/calculate-fee.pipe';
import { DirectPayComponent } from './direct-pay/direct-pay.component';
// import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
//import { ShareComponent } from './circle/share/share.component';
import { FileUploadModule } from "ng2-file-upload";
import { NgUploaderModule } from 'ng-uploader';
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SwiperComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    MemberComponent,
    CircleComponent,
    DisplayDate,
    SearchComponent,
    MessageComponent,
    CenterComponent,
    FriendComponent,
    CreateComponent,
    ChatComponent,
    ChatWindowComponent,
    ChatListComponent,
    SearchFeedComponent,
    SearchUserComponent,
    SearchCircleComponent,
    TickettestComponent,
    TicketDatailsComponent,
    MergeArrayPipe,
    PostComponent,
    ChatFriendComponent,
    GroupComponent,
    InvoiceComponent,
    ChatMobileComponent,
    GroupchatComponent,
    InvoiceFreeComponent,
    CalculateFeePipe,
    DirectPayComponent,
    ActiveSuccessComponent,
    UploadSeatsComponent,
    PublishActivitiesComponent
    //ShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    NgUploaderModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[Http]
      }
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      
      { path: 'signin', component: SigninComponent },
      { path: 'member/:userId', component: MemberComponent },
      { path: 'group/:groupId', component: GroupComponent },
      { path: 'chat', component: ChatComponent},
      { path: 'circle/:circleId', component: CircleComponent},
      { path: 'search/:searchText', component: SearchComponent },
      { path: 'center/message', component: MessageComponent },
      { path: 'center/friend', component: FriendComponent },
      { path: 'create', component: CreateComponent },
      { path: 'invoice/:invoiceId/user/:userId', component: InvoiceComponent },
      { path: 'invoice/:groupId', component: InvoiceFreeComponent },
      { path: 'activeSuccess/:groupId', component: ActiveSuccessComponent },
      // { path: 'home/:search', component: HomeComponent },
      // { path: 'user/:userId/:albumId', component: UserComponent },
      // { path: 'user/:userId', component: UserComponent },
      // { path: 'create', component: CreateComponent }
      { path: 'publishactivities', component: PublishActivitiesComponent },
      { path: 'uploadseats', component: UploadSeatsComponent },
      { path: 'ticketDatails', component: TicketDatailsComponent },
      { path: 'ticketTest', component: TickettestComponent },
      { path: 'post/:postId', component: PostComponent },
      { path: 'chat/:userId', component: ChatComponent },
      { path: 'chat/user/:userId/group/:groupId', component: ChatComponent },
      { path: 'groupchat', component: GroupchatComponent},
      { path: 'directPay/:ticketId', component: DirectPayComponent}
    ])
  ],
  providers: [HttpService, Title],
  bootstrap: [AppComponent],
})
export class AppModule { }
