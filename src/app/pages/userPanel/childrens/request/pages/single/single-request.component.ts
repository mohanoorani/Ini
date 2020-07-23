import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { Request } from '../../models/request';
import { AuthService } from '@app/authentication/services';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
    this.getARequest();
  }

  getARequest() {
    
    this.userPanelService.GetAllRequests(null, this.requestCode, null).subscribe((res: Request[]) => {
      this.request = res[0];
      
      console.log(this.request);
    });
  }
}
