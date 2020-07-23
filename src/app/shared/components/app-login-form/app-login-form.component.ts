import { Component } from '@angular/core';
import { AlertifyService } from '@app/shared/services';
import { LoginService } from './Services/LoginService';
import { AuthService } from '@app/authentication/services';
import {  Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-form',
  templateUrl: './app-login-form.component.html',
  styleUrls: ['./app-login-form.component.css']
})
export class AppLoginFormComponent {

  mobileNumber: string = "";
  verifyCode: string = "";
  isCodeView: boolean;

  constructor(
    private alertifyService: AlertifyService,
    private loginService: LoginService,
    private authService: AuthService,
    private route: Router) { }

  login() {
    if (this.mobileNumber == "") {
      this.alertifyService.error("شماره همراه خود را وارد نمایید");
      return;
    }

    if (this.mobileNumber.length != 11 || !Number(this.mobileNumber)) {
      this.alertifyService.error("شماره همراه می بایست بصورت عددی 11 رقمی وارد شود");
      return;
    }

    if (!this.mobileNumber.startsWith("09")) {
      this.alertifyService.error("شماره همراه خود را بدرستی وارد نمایید");
      return;
    }

    this.alertifyService.success("کد تایید تا لحظاتی دیگر برای شما ارسال می گردد");
    this.isCodeView = true;

    this.loginService.Login(this.mobileNumber).subscribe((res: any) => {

      if (!res.success) {
        this.alertifyService.error("خطا در ارسال کد. لطفا دقایقی دیگر تلاش نمایید");
        this.isCodeView = false;
        return;
      }

      this.isCodeView = true;
    });
  }

  ConfirmCode() {
    if (this.verifyCode == "") {
      this.alertifyService.error("کد تایید را وارد نمایید");
      return;
    }

    if (this.verifyCode.length != 5 || !Number(this.verifyCode)) {
      this.alertifyService.error("کد تایید می بایست بصورت عددی 5 رقمی وارد شود");
      return;
    }

    this.loginService.ConfirmCode(this.mobileNumber, this.verifyCode).subscribe((res: any) => {
      this.authService.setAuthorizationHeaderValue(res.token);
      this.authService.setUserInfo(res.user);

      $('#AccountModal').hide();
      $('.modal-backdrop').remove();

      this.route.navigate(['userpanel/profile']);
      this.alertifyService.success(`${res.user.firstName} ${res.user.lastName} عزیز خوش آمدید`);

    });
  }

  changeMobileNumber() {
    this.verifyCode = "";
    this.isCodeView = false;
  }
}
