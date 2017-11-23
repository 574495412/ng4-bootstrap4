import { NgModule } from '@angular/core';
import {HttpModule, BrowserXhr, Http} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FileUploadModule } from "ng2-file-upload";
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SwiperComponent } from './home/swiper/swiper.component';
import { CardComponent } from './home/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './nav/signin/signin.component';
import { SignupComponent } from './nav/signup/signup.component';
import { MemberComponent } from './member/member.component';
import { CircleComponent } from './circle/circle.component';
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
import { PostComponent } from './post/post.component';
import { ChatFriendComponent } from './chat/chat-friend/chat-friend.component';
import { GroupComponent } from './group/group.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ChatMobileComponent } from './chat/chat-mobile/chat-mobile.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { InvoiceFreeComponent } from './invoice-free/invoice-free.component';
import { ActiveSuccessComponent } from './activeSuccess/activeSuccess.component';
import { DirectPayComponent } from './direct-pay/direct-pay.component';
import { RegistrationFormComponent } from './registrationform/registrationform.component';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
// import { CalculateFeePipe } from '../@theme/pipes/pipe/calculate-fee.pipe';
// import { MergeArrayPipe } from '../@theme/pipes/pipe/merge-array.pipe';
// import { DisplayDate } from '../@theme/pipes/pipe/displayDate.pipe';
// import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from '../@theme/pipes';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FileUploadModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[Http]
      }
    }),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    // CalculateFeePipe,
    // MergeArrayPipe,
    // DisplayDate,
    HomeComponent,
    NavComponent,
    SwiperComponent,
    CardComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    MemberComponent,
    CircleComponent,
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
    PostComponent,
    ChatFriendComponent,
    GroupComponent,
    InvoiceComponent,
    ChatMobileComponent,
    GroupchatComponent,
    InvoiceFreeComponent,
    DirectPayComponent,
    ActiveSuccessComponent,
    UploadSeatsComponent,
    PublishActivitiesComponent,
    RegistrationFormComponent
  ],
})
export class PagesModule {
}
