
import {Component, OnInit} from '@angular/core';
import {HttpClient , HttpClientModule} from "@angular/common/http";
// import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import { TokenService } from './token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit{
  li:any;
  lis=[];
  constructor( private http : HttpClient ) {
  }

// constructor(private  JSONPlaceHolder: TokenService) {
//   this.data = new Array<any>()
// }
//     data:Array<any>

    title = 'angular-api-github-login';

  ngOnInit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/todos/')
    //   .subscribe(Response => {
    //     console.log(Response)
    //     this.li=Response;
    //     this.lis=this.li.list;
    //   });
  }

  loginGithub() {

    // this.JSONPlaceHolder.getData().subscribe((data) => {
    //   console.log(data);
    //   this.data = data
    // })

      this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(data => {
      console.log(data)
        this.li=data;
      this.lis=this.li.list
    })
  }
}
