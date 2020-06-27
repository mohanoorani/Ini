import { Component, OnInit } from '@angular/core';
import { Influencer } from '../../models/influencer';
import { InfluencerService } from '../../services/influencer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-influencer-detail',
  templateUrl: './app-influencer-detail.component.html',
  styleUrls: ['./app-influencer-detail.component.css']
})
export class AppInfluencerDetailComponent implements OnInit {

  influencer: Influencer;
  showCloseModalButton: boolean

  constructor(private influencerService: InfluencerService, private titleService: Title) { }

  ngOnInit() { }

  public GetInfluencerDetail(id: number, viewType: string) {

    this.showCloseModalButton = (viewType == 'quick')

    this.influencerService.GetById(id)
      .subscribe((res: Influencer) => {

        this.influencer = res;

      });
  }
}