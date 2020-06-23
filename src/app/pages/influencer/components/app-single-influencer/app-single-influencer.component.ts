import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Influencer } from '../../models/influencer';
import { AppInfluencerDetailComponent } from '../app-influencer-detail/app-influencer-detail.component';

@Component({
  selector: 'app-single-influencer',
  templateUrl: './app-single-influencer.component.html',
  styleUrls: ['./app-single-influencer.component.css']
})
export class AppSingleInfluencerComponent implements OnInit {

  @Input() influencer: Influencer;
  @Output() openQuickView: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  quickView(influencerId: number) {

    this.openQuickView.emit(influencerId);
    // document.getElementById("openModalButton").click();
  }
}