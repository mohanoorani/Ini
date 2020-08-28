import { Component, OnInit, Input } from '@angular/core';
import { Request } from '@app/pages/userPanel/models/request';
import { Influencer } from '@app/pages/influencer/models/influencer';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { AuthService } from '@app/authentication/services/auth.service';
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
  isPriceSet: boolean;

  constructor(
    private userPanelService: UserPanelService,
    authService: AuthService,
    private alertifyService: AlertifyService) {
    this.userId = authService.getUserInfo().id;
  }

  ngOnInit() {

    var interval = setInterval(() => {

      if (this.request.OriginInstagramID) {

        this.isPriceSet = this.request.Price && +this.request.Price > 0;

        console.log(this.request);
        this.getOriginInstagramPage();
        this.getDestinationInstagramPage();

        this.splitPriceWithComma();
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

  setPriceAndConfirm(event: any) {
    if (!event.returnValue)
      return;

    var price = this.request.Price.replace(new RegExp(',', 'g'), '');

    if (!price || isNaN(Number(price)) || Number(price) < 0) {
      this.alertifyService.error('قیمت پیشنهادی را به درستی وارد کنید');
      return;
    }

    this.userPanelService.UpdateRequestPrice(this.request.ID, +price).subscribe(() => {
      this.userPanelService.PublisherAccept(this.request.ID).subscribe(() => {

        this.alertifyService.success('تایید با موفقیت انجام شد');
        this.isPriceSet = false;

        this.setRequestAsPublisherAccepted();
      });
    });
  }

  setRequestAsPublisherAccepted() {
    this.request.PersianTitle = 'تایید انتشار دهنده';
    this.request._RequestStatusID = 3;
  }

  OriginConfirm(event: any) {
    if (!event.returnValue)
      return;

    this.userPanelService.SideAccept(this.request.ID).subscribe(() => {

      this.userPanelService.SideAccept(this.request.ID).subscribe(() => {

        this.alertifyService.success('تایید شما با موفقیت انجام شد. لطفا مبلغ را از طریق درگاه پرداخت نمایید');

        this.setRequestAsSideAccepted();
      });
    });
  }

  setRequestAsSideAccepted() {
    this.request.PersianTitle = 'تایید درخواست کننده';
    this.request._RequestStatusID = 4;
  }


  splitPriceWithComma() {

    var val = this.request.Price;
    val = val.replace(/[^0-9\.]/g, '');

    if (val != "") {
      var valArr = val.split('.');
      valArr[0] = (parseInt(valArr[0], 10)).toLocaleString();
      val = valArr.join('.');
    }

    this.request.Price = val;
  }

  goToBank() {
    this.userPanelService.GetPaymentUrl(this.request.ID).subscribe((res: any) => {
      window.open(res.url);
      // window.open(res.url,"_blank");
    });
  }
}