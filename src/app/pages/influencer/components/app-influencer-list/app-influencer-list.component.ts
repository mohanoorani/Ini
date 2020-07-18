import { Component, OnInit, Input } from '@angular/core';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './app-influencer-list.component.html',
  styleUrls: ['./app-influencer-list.component.css']
})
export class AppInfluencerListComponent implements OnInit {

  @Input() InfluencerList: Influencer[] = []
  @Input() cssClass: string = 'col-md-3';

  constructor() { }

  ngOnInit() {
  }
}
