import { Component, OnInit } from '@angular/core';

import { Influencer } from '../../models/influencer';
import { InfluencerService } from '../../services/influencer.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-influencer',
  templateUrl: 'influencer-list.component.html',
  styleUrls: ['influencer-list.component.css']
})

export class InfluencerListComponent implements OnInit {

  influencerList: Influencer[] = [];
  categoryId: number;

  constructor(
    private influencerService: InfluencerService,
    private route: ActivatedRoute,
    private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("لیست اینفلوئنسرها");

    var categoryId = this.route.snapshot.params['id'];

    this.influencerService.GetAll(categoryId).subscribe((res: Influencer[]) => {
      this.influencerList = res
    });
  }
}
