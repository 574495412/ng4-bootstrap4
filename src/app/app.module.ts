import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, BrowserXhr, Http} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { FileUploadModule } from "ng2-file-upload";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpService } from "./pages/http.service";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[Http]
      }
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },HttpService, Title],
  bootstrap: [AppComponent],
})
export class AppModule { }
