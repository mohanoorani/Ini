import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { Request } from '../../models/request';
import { AuthService } from '@app/authentication/services';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-request',
  templateUrl: './single-request.component.html',
  styleUrls: ['./single-request.component.css']
})
export class SingleRequestComponent implements OnInit {

  request: Request = new Request();
  requestId: number;

  constructor(
    private userPanelService: UserPanelService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    this.requestId = this.route.snapshot.params['id'];
    //this.getARequest();
  }

  getARequest() {
    this.userPanelService.GetRequest(this.requestId).subscribe((res: Request) => {

    });
  }
}
