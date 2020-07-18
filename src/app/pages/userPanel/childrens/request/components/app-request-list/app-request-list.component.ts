import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../models/request';
import { AuthService } from '@app/authentication/services';

@Component({
  selector: 'app-request-list',
  templateUrl: './app-request-list.component.html',
  styleUrls: ['./app-request-list.component.css']
})

export class AppRequestListComponent implements OnInit {

  @Input() requests: Request[] = [];
  userId: number;
  constructor(authService: AuthService) {
    this.userId = authService.getUserInfo().id;
   }

  ngOnInit() {
  }


}