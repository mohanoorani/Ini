import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '@app/shared/services';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { Request } from '../../../models/request';
import { forEach } from '@angular/router/src/utils/collection';
import { AuthService } from '@app/authentication/services';

@Component({
  selector: 'app-request-com',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
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
