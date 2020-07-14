import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '../../services/userPanel.service';
import { AlertifyService } from '@app/shared/services';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  instagramId: string;
  code: string;
  constructor(private userPanelService: UserPanelService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  getCode() {
    if (this.instagramId.length < 5) {
      this.alertifyService.error("شناسه کاربری را بدرستی وارد نمایید");
      return;
    }

    this.userPanelService.VerifyInstagramProfile(this.instagramId).subscribe((res) => {
      debugger;
    });
  }

  verifyCode() {
    if (this.code.length < 5) {
      this.alertifyService.error("کد تایید را بدرستی وارد نمایید");
      return;
    }

    this.userPanelService.ConfirmInstagramVerificationCode(this.instagramId, this.code).subscribe((res) => {
      debugger;
    });
  }

}
