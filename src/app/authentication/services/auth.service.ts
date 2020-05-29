import { Injectable, OnInit } from '@angular/core';
// import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  loginAccures: Subject<boolean> = new Subject<boolean>();

  jwtHelper = new JwtHelperService();
  
  constructor() {
    localStorage.setItem('token', this.getAuthorizationHeaderValue());
  }

  decodedToken(){
    return this.jwtHelper.decodeToken(this.getAuthorizationHeaderValue());
  }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getAuthorizationHeaderValue());
  }

  getClaims(): any {
    return this.decodedToken().Role;
  }

  getAuthorizationHeaderValue(): string {

    if(localStorage.getItem('token') == null)
      return '';

    return localStorage.getItem('token');
  }
  
  setAuthorizationHeaderValue(token:string):void{
    localStorage.setItem('token',token);
  }

  getRole() {
    return this.decodedToken().Role;
  }

  signOut(): void {

    localStorage.removeItem('token');

  }
}
