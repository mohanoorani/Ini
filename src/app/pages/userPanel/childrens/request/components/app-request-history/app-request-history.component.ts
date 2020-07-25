import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@app/authentication/services';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { RequestHistory } from '../../models/requesthistory';
import { AlertifyService } from '@app/shared/services';

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
  comment: string;
  sendingComment: boolean = false;

  constructor(
    private userPanelService: UserPanelService,
    private alertifyService: AlertifyService,
    authService: AuthService) {
    this.userId = authService.getUserInfo().id;
  }

  ngOnInit() {
    this.getRequestHistory();

    // setInterval(() => this.getRequestHistory(), 10000);
  }

  getRequestHistory() {
    this.userPanelService.GetRequestHistory(this.requestId, null).subscribe((res: RequestHistory[]) => {
      this.histories = res;
      console.log(res);
    });
  }

  sendComment() {
    this.comment = this.comment.trim();

    if (!this.comment) {
      this.alertifyService.error('متن پیام را وارد نمایید')
      return;
    }

    this.sendingComment = true;
    this.userPanelService.SendHistoryMessage(this.requestId, this.userId, this.comment).subscribe(() => {

      this.getRequestHistory();

      this.sendingComment = false;
      this.comment = '';
    });
  }

  toggleChat() {
    var element = document.getElementsByClassName('glyphicon glyphicon-plus')[0];

    if (element) {
      element.setAttribute('class', 'glyphicon glyphicon-minus');
    }
    else {
      element = document.getElementsByClassName('glyphicon glyphicon-minus')[0];
      element.setAttribute('class', 'glyphicon glyphicon-plus');
    }
  }
}