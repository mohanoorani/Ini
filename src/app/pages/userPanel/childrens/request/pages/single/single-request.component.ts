import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { AuthService } from '@app/authentication/services/auth.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Request } from '@app/pages/userPanel/models/request';

@Component({
  selector: 'single-request',
  templateUrl: './single-request.component.html',
  styleUrls: ['./single-request.component.css']
})
export class SingleRequestComponent implements OnInit {

  request: Request = new Request();
  requestCode: string;
  userId: string;

  constructor(
    private userPanelService: UserPanelService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.requestCode = this.route.snapshot.params['requestCode'];
    this.userId = this.authService.getUserInfo().id;
    this.titleService.setTitle(`اطلاعات درخواست ${this.requestCode}`);
    
    this.getAllRequest();
  }

  getAllRequest() {
    
    this.userPanelService.GetAllRequests(+this.userId, this.requestCode, null).subscribe((res: Request[]) => {
      this.request = res[0];
    });
  }
}
