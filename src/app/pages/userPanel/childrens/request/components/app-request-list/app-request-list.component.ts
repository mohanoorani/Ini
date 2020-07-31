import { Component, Input } from '@angular/core';
import { Request } from '@app/pages/userPanel/models/request';
import { AuthService } from '@app/authentication/services/auth.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './app-request-list.component.html',
  styleUrls: ['./app-request-list.component.css']
})

export class AppRequestListComponent{

  @Input() requests: Request[] = [];
  userId: number;
  constructor(authService: AuthService) {
    this.userId = authService.getUserInfo().id;
  }
}