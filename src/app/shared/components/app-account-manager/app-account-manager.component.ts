import { Component } from '@angular/core';
import { AuthService } from '@app/authentication/services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '@app/shared/services';
import * as a from 'bootstrap';

@Component({
  selector: 'app-account-manager',
  templateUrl: './app-account-manager.component.html',
  styleUrls: ['./app-account-manager.component.css']
})
export class AccountManagerComponent {

  userDetail: string = null;

  constructor(
    private route: Router,
    private authService: AuthService,
    private alertifyService: AlertifyService) {
    this.manageAuthView();
  }

  manageAuthView() {
    setInterval(() => { this.getUserInfo(); }, 500);
  }

  openAccountModal() {
    $('#AccountModal').modal({ "backdrop": "static" });

    setTimeout(() => {
      $('#mobileNumber').focus();
    }, 500);
  }

  logOut() {
    this.authService.logOut();

    this.getUserInfo();

    this.route.navigate(['/']);

    this.alertifyService.success('به امید دیدار مجدد');
  }

  getUserInfo() {
    var userInfo = this.authService.getUserInfo();

    if (this.authService.isLoggedIn()) {
      if (userInfo)
        this.userDetail = `${userInfo.firstName} ${userInfo.lastName}`;

      if (this.userDetail.trim() == '')
        this.userDetail = 'خوش آمدید';
    }
    else {
      this.userDetail = null;
    }
  }
}
