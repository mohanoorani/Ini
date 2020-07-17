import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './app-influencer-list.component.html',
  styleUrls: ['./app-influencer-list.component.css']
})
export class AppInfluencerListComponent implements OnInit {

  @Input() InfluencerList: Influencer[] = []
  @Input() cssClass: string = 'col-md-3';
  showEmptyRow: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.showEmptyRow = true, 700);
  }
}
