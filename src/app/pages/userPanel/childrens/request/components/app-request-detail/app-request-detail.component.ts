import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../models/request';
import { Influencer } from '@app/pages/influencer/models/influencer';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { AuthService } from '@app/authentication/services';
import { AlertifyService } from '@app/shared/services';

@Component({
  selector: 'app-request-detail',
  templateUrl: './app-request-detail.component.html',
  styleUrls: ['./app-request-detail.component.css']
})

export class AppRequestDetailComponent implements OnInit {

  @Input() request: Request = new Request();
  originInstagramPage: Influencer = new Influencer();
  destinationInstagramPage: Influencer = new Influencer();
  userId: string;
  userPrice: string;

  constructor(
    private userPanelService: UserPanelService,
    authService: AuthService,
    private alertifyService: AlertifyService) {
    this.userId = authService.getUserInfo().id;
  }

  ngOnInit() {

    var interval = setInterval(() => {

      if (this.request.OriginInstagramID) {

        console.log(this.request);
        this.getOriginInstagramPage();
        this.getDestinationInstagramPage();

        clearInterval(interval);
      }

    }, 500);

  }

  getOriginInstagramPage() {
    this.userPanelService.GetAccount(this.request.OriginInstagramID).subscribe((res: Influencer[]) => {
      this.originInstagramPage = res[0];
    });
  }

  getDestinationInstagramPage() {
    this.userPanelService.GetAccount(this.request.DestinationInstagramID).subscribe((res: Influencer[]) => {
      this.destinationInstagramPage = res[0];
    });
  }

  downloadAttachment() {
    this.userPanelService.downloadAttachment(this.request.FileName).subscribe((res: Blob) => {

      const url = window.URL.createObjectURL(res);

      window.open(url);
    });
  }

  setPrice() {
    
    if (!this.userPrice || isNaN(Number(this.userPrice)) || Number(this.userPrice) < 10000) {
      this.alertifyService.error('قیمت پیشنهادی را به درستی وارد کنید');
      return;
    }

    this.userPanelService.UpdateRequestPrice(this.request.ID, this.userPrice).subscribe(() => {
        this.alertifyService.success('قیمت با موفقیت ثبت گردید');
    });
  }
}