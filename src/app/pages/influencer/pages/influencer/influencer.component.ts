import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent implements OnInit {

  influencerId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.influencerId = this.route.snapshot.params['id'];
  }
}
