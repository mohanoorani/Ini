import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from '@app/authentication/services/auth.service';
import { UserPanelService } from '@app/pages/userPanel/services/userPanel.service';
import { RequestHistory } from '../../../../models/requesthistory';
import { AlertifyService } from '@app/shared/services';

@Component({
  selector: 'app-request-history',
  templateUrl: './app-request-history.component.html',
  styleUrls: ['./app-request-history.component.css']
})

export class AppRequestHistoryComponent implements OnInit, OnDestroy {

  @Input() requestId: number;
  userId: number;
  histories: RequestHistory[] = [];
  comment: string;
  sendingComment: boolean = false;
  intervalManager;
  @ViewChild('commentBox') commentBoxElement: ElementRef;

  constructor(
    private userPanelService: UserPanelService,
    private authService: AuthService) { }

  ngOnDestroy(): void {
    clearInterval(this.intervalManager);
  }

  async ngOnInit() {
    this.userId = this.authService.getUserInfo().id;

    var interval = setInterval(() => {
      if (this.requestId) {
        this.getRequestHistory();
        clearInterval(interval);
      }
    }, 1000);

    this.intervalManager = setInterval(() => this.getRequestHistory(), 10000);
  }

  getRequestHistory() {

    this.userPanelService.GetRequestHistory(this.requestId, this.userId).subscribe((res: RequestHistory[]) => {
      if (this.histories && this.histories.length == 0) {
        this.histories = res;
        this.scrollEnd();
      }

      else if (this.histories.length < res.length) {
        res.forEach(element => {

          var notExistsChat = this.histories.find(i => i.ID == element.ID);

          if (!notExistsChat) {
            this.histories.push(element);
            this.scrollEnd();
          }
        });
      }

    });
  }

  sendComment() {
    if (!this.comment && this.comment == '') {
      return;
    }

    this.comment = this.comment.trim();
    this.sendingComment = true;

    this.userPanelService.SendHistoryMessage(this.requestId, this.userId, this.comment).subscribe(() => {

      this.getRequestHistory();

      this.sendingComment = false;
      this.comment = '';
    });
  }

  toggleChat() {
    var element = document.getElementsByClassName('glyphicon glyphicon-chevron-up')[0];

    if (element) {
      element.setAttribute('class', 'glyphicon glyphicon-chevron-down');
    }
    else {
      element = document.getElementsByClassName('glyphicon glyphicon-chevron-down')[0];
      element.setAttribute('class', 'glyphicon glyphicon-chevron-up');
    }

    this.scrollEnd();
    setTimeout(() => {
      this.commentBoxElement.nativeElement.focus()
    });
  }

  scrollEnd() {
    var chatBody = document.getElementsByClassName('panel-body')[0];

    setTimeout(() => chatBody.scrollTo(20, chatBody.scrollHeight));
  }



}