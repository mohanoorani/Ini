import { Component, OnInit } from '@angular/core';
import { InfluencerService } from '@app/pages/influencer/services/influencer.service';
import { Influencer } from '@app/pages/influencer/models/influencer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  influencerList: Influencer[] = [];
  constructor(private influencerService: InfluencerService) { }

  ngOnInit() {
    this.influencerService.GetTopInstagramProfiles().subscribe((res: Influencer[]) => {
      res.pop();
      res.pop();
      res.pop();
      res.pop();
      this.influencerList = res;
    })
  }

}
