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

  userId: number;
  requests: Request[] = [];
  myRequests: Request[] = [];
  constructor(private userPanelService: UserPanelService, private authService: AuthService) { }

  ngOnInit() {
    this.userId = this.authService.getUserInfo().id;

    this.getAllRequests();
  }

  getAllRequests() {
    this.userPanelService.GetAllRequests(this.userId, null, null).subscribe((res: Request[]) => {
      
      res.forEach(request => {
        if (request.OriginUserID == this.userId)
          this.myRequests.push(request);
        else
          this.requests.push(request);
      });

    });
  }
}
