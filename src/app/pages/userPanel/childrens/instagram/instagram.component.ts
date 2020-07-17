import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '../../services/userPanel.service';
import { AlertifyService } from '@app/shared/services';
import { Influencer } from '@app/pages/influencer/models/influencer';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  influencerList: Influencer[] = [];
  instagramId: string;
  code: string;
  isCodeView: boolean
  isListView: boolean = true;
  constructor(private userPanelService: UserPanelService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.userPanelService.GetAllAccounts().subscribe((res: Influencer[]) => {
      this.influencerList = res;
    });
  }

  addAccount() {
    this.isListView = false; 
  }

   showList() {
    this.isListView = true; 
  }

  verifyAccount() {
    if (!this.instagramId || this.instagramId.length < 5) {
      this.alertifyService.error("شناسه کاربری را بدرستی وارد نمایید");
      return;
    }

    this.userPanelService.VerifyInstagramProfile(this.instagramId).subscribe((res: any) => {
      this.isCodeView = true;
      this.alertifyService.success('کد تایید به اینستاگرام شما دایرکت شد');
    });
  }

  verifyCode() {
    if (!this.code || this.code.length < 5) {
      this.alertifyService.error("کد تایید را بدرستی وارد نمایید");
      return;
    }

    this.userPanelService.ConfirmInstagramVerificationCode(this.instagramId, +this.code).subscribe((res) => {
      this.alertifyService.success('حساب اینستاگرام شما با موفقیت افزوده شد');
      this.getAllAccounts();
      this.isListView = true;
    });
  }

  enterInstagramId() {
    this.isCodeView = false;
    this.code = '';
  }
}
