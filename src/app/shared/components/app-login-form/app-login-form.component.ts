import { Component } from '@angular/core';
import { AlertifyService } from '@app/shared/services';
import { LoginService } from './Services/LoginService';
import { AuthService } from '@app/authentication/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './app-login-form.component.html',
  styleUrls: ['./app-login-form.component.css']
})
export class AppLoginFormComponent {

  mobileNumber: string = "";
  verifyCode: string = "";
  isCodeView: boolean;

  constructor(private alertifyService: AlertifyService, private loginService: LoginService,
    private authService: AuthService, private route: Router) { }

    homePage(){
      this.route.navigate(['profile']);
    }

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

    // this.tempCode = "12345";
    // this.isCodeView = true;
    this.loginService.Login(this.mobileNumber).subscribe((res: any) => {
      
      if(!res.success){
        this.alertifyService.success("لطفا دقایقی دیگر تلاش نمایید");
        return;
      }

      this.alertifyService.success("کد ارسالی را وارد نمایید");

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

    this.loginService.ConfirmCode(this.mobileNumber, this.verifyCode).subscribe((res: any) =>{
        debugger;
        this.authService.setAuthorizationHeaderValue(res.token);
    });
  }

  changeMobileNumber() {
    this.verifyCode = "";

    this.isCodeView = false;

  }
}
