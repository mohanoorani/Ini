import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../../models/request';

@Component({
  selector: 'app-request-list',
  templateUrl: './app-request-list.component.html',
  styleUrls: ['./app-request-list.component.css']
})

export class AppRequestListComponent implements OnInit {

  @Input() requests: Request[] = [];

  constructor() { }

  ngOnInit() {
  }


}