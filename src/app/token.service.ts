
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = ' refresh_token';

@Injectable({
  providedIn:'root'
})
export class TokenService{

  constructor(private http: HttpClient) {
   // getData(): Observable<any> {
   //    const URL = "https://jsonplaceholder.typicode.com/todos/"
   //    return this.http.get<any>(URL)
   //  }
  }
  // getToken():string {
  //   return localStorage.getItem(ACCESS_TOKEN);
  // }
  //
  // getRefreshToken():string{
  //   return localStorage.getItem(REFRESH_TOKEN);
  // }
  // saveToken(token): void {
  //   localStorage.setItem(ACCESS_TOKEN,token);
  // }
  // saveRefreshToken(refreshToken):void {
  //   localStorage.setItem(REFRESH_TOKEN,refreshToken)
  // }
  // removeToken():void {
  //   localStorage.removeItem(ACCESS_TOKEN);
  // }
  // removeRefreshToken():void {
  //   localStorage.removeItem(REFRESH_TOKEN);
  // }
}
