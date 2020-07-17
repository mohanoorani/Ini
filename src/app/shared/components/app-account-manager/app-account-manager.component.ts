import { Component } from '@angular/core';
import { AuthService } from '@app/authentication/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-manager',
  templateUrl: './app-account-manager.component.html',
  styleUrls: ['./app-account-manager.component.css']
})
export class AccountManagerComponent {

  userDetail: string = null;

  constructor(private route: Router, private authService: AuthService) {
    this.manageAuthView();
  }

  manageAuthView() {
    setInterval(() => {this.getUserInfo();}, 500);
  }

  logOut() {
    this.authService.signOut();

    this.getUserInfo();

    this.route.navigate(['/']);
  }

  getUserInfo() {
    var userInfo = this.authService.getUserInfo();

    this.userDetail = userInfo == null ? "" : userInfo.firstName + " " + userInfo.lastName;
  }
}
