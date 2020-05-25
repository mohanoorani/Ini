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

    //return this.user.profile.role;
    return this.decodedToken().Role;
  }


  signOut(): void {

    localStorage.removeItem('token');

  }


}

// export function getClientSettings(): UserManagerSettings {
//   return {
//     authority: 'http://localhost:5000/',
//     client_id: 'angular_spa',
//     redirect_uri: 'http://localhost:4300/auth-callback',
//     post_logout_redirect_uri: 'http://localhost:4300/logout',
//     response_type: "id_token token",
//     scope: "openid profile api1",
//     filterProtocolClaims: true,
//     loadUserInfo: false,
//     automaticSilentRenew: false,
//     silent_redirect_uri: 'http://localhost:4300/silent-refresh.html'
//   };
// }
