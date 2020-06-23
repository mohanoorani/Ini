import { Component, OnInit } from '@angular/core';
import { Influencer } from '../../models/influencer';
import { InfluencerService } from '../../services/influencer.service';
import * as deconsult from '../../../../../assets/js/deconsult';
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

    this.influencerService.GetInfluencerDetail(id)
      .subscribe((res: Influencer) => {

        this.influencer = res;

        if (this.influencer.Tags != '' && this.influencer.Tags) {

          this.influencer.TagList = [];
          this.influencer.Tags.split('/').forEach(x => {
            this.influencer.TagList.push({ name: x, url: x.replace(new RegExp(" ", "g"), '-') });
          });
        }

        if (viewType == 'quick') {
          this.influencer.Description = "";
          this.influencer.InfluencerImages = [];
        }
        else
          this.titleService.setTitle(this.influencer.Title);


        setTimeout(function () { deconsult.init(); }, 200);
      });
  }
}