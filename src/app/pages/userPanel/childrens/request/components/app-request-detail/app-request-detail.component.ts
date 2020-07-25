import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../models/request';
import { Influencer } from '@app/pages/influencer/models/influencer';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { AuthService } from '@app/authentication/services';

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

  constructor(private userPanelService: UserPanelService, authService: AuthService) {
    this.userId = authService.getUserInfo().id;
  }

  ngOnInit() {
    var interval = setInterval(() => {

      if (this.request.OriginInstagramID) {

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
     
      const url= window.URL.createObjectURL(res);

      window.open(url);
    });
  }
}