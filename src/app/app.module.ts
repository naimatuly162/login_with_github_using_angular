import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//
// export class DataService {
//
//   private REST_API_SERVER = "http://localhost:4200";
//
//   constructor(private httpClient: HttpClient) { }
//
//   public sendGetRequest(){
//     return this.httpClient.get(this.REST_API_SERVER);
//   }
// }

 // const config = new SocialAuthServiceConfig ([
 //    id : GoogleLoginProvider.PROVIDER_ID;
 //    provider: new GoogleLoginProvider('6b4c7c59d4a6933485038df258d84c9616bad86f');
 // ]) ;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [

    // {
    //   provide: SocialAuthServiceConfig
    // }
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GithubLoginProvider.PROVIDER_ID,
    //         provider: new GithubLoginProvider('Github-Client-ID')
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}


