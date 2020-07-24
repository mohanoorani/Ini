import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@app/authentication/services';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { RequestHistory } from '../../models/requesthistory';

@Component({
  selector: 'app-request-history',
  templateUrl: './app-request-history.component.html',
  styleUrls: ['./app-request-history.component.css']
})

export class AppRequestHistoryComponent implements OnInit {

  @Input() requestId: number;
  userId: number;
  histories: RequestHistory[] = [];
  startChat: boolean = false;

  constructor(
    private userPanelService: UserPanelService, 
    authService: AuthService) {
    this.userId = authService.getUserInfo().id;
  }

  ngOnInit() {

    this.getRequestHistory();
  }

  getRequestHistory() {
    this.userPanelService.GetRequestHistory(this.requestId).subscribe((res: RequestHistory[]) => {
      this.histories = res;
      console.log(res);
    });
  }

  toggleChat() {
    var element = document.getElementsByClassName('glyphicon glyphicon-plus')[0];

    if(element){
      element.setAttribute('class','glyphicon glyphicon-minus');
    }
    else{
      element = document.getElementsByClassName('glyphicon glyphicon-minus')[0];
      element.setAttribute('class','glyphicon glyphicon-plus');
    }
  }

}