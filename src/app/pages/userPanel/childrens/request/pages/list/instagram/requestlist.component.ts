import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '@app/shared/services';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { Request } from '../../../models/request';

@Component({
  selector: 'app-request-com',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  constructor(private userPanelService: UserPanelService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests() {
    this.userPanelService.GetAllRequests(null, null).subscribe((res: Request[]) => {
      this.requests = res;
      console.log(res);
    });
  }
}
