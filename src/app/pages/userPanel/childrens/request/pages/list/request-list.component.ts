import { Component, OnInit } from '@angular/core';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { Request } from '../../models/request';
import { AuthService } from '@app/authentication/services';

@Component({
  selector: 'app-request-com',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  myRequests: Request[] = [];
  constructor(private userPanelService: UserPanelService, private authService: AuthService) { }

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests() {
    this.userPanelService.GetAllRequests(null, null).subscribe((res: Request[]) => {
      var userId = this.authService.getUserInfo().id;

      res.forEach(request => {
        if (request.OriginUserID == userId)
          this.myRequests.push(request);
        else
          this.requests.push(request);
      });
    });
  }
}
