import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { InfluencerService } from '../../services/influencer.service';
import { Influencer } from '../../models/influencer';
import * as $ from 'jquery';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})

export class InfluencerComponent implements OnInit {

  instagramId: string;
  influencer: Influencer = new Influencer();

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private influenserService: InfluencerService) {
  }

  ngOnInit() {
    this.instagramId = this.route.snapshot.params['id'];
    this.titleService.setTitle(this.instagramId);

    this.influenserService.GetByInstagramId(this.instagramId).subscribe((res: Influencer[]) => {
      this.influencer = res[0];
    });
  }

  openModal() {
    // $('#RequestModal').modal({ "backdrop": "static" });
    
  }
}
