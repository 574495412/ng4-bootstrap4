import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NavComponent } from './nav/nav.component';
import { SwiperComponent } from './home/swiper/swiper.component';
import { CardComponent } from './home/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
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
// import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
//import { ShareComponent } from './circle/share/share.component';
const routes: Routes =[
  { path: '', component: PagesComponent,
  children: [ 
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
  { path: 'home', component: HomeComponent },
  // { path: 'user/:userId/:albumId', component: UserComponent },
  // { path: 'user/:userId', component: UserComponent },
  { path: 'registrationform', component: RegistrationFormComponent },
  { path: 'publishactivities', component: PublishActivitiesComponent },
  { path: 'uploadseats', component: UploadSeatsComponent },
  { path: 'ticketDatails', component: TicketDatailsComponent },
  { path: 'ticketTest', component: TickettestComponent },
  { path: 'post/:postId', component: PostComponent },
  { path: 'chat/:userId', component: ChatComponent },
  { path: 'chat/user/:userId/group/:groupId', component: ChatComponent },
  { path: 'groupchat', component: GroupchatComponent},
  { path: 'directPay/:ticketId', component: DirectPayComponent},
  {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
]
}]
// const routes: Routes = [{
//   path: '',
//   component: PagesComponent,
//   children: [{
//     path: 'dashboard',
//     component: DashboardComponent,
//   }, {
//     path: 'ui-features',
//     loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
//   }, {
//     path: 'components',
//     loadChildren: './components/components.module#ComponentsModule',
//   }, {
//     path: 'maps',
//     loadChildren: './maps/maps.module#MapsModule',
//   }, {
//     path: 'charts',
//     loadChildren: './charts/charts.module#ChartsModule',
//   }, {
//     path: 'editors',
//     loadChildren: './editors/editors.module#EditorsModule',
//   }, {
//     path: 'forms',
//     loadChildren: './forms/forms.module#FormsModule',
//   }, {
//     path: 'tables',
//     loadChildren: './tables/tables.module#TablesModule',
//   }, {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   }],
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
