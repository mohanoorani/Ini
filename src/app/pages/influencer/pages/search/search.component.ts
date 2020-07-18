import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { InfluencerService } from '../../services/influencer.service';
import { Influencer } from '../../models/influencer';

@Component({
  selector: 'app-influencer-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class InfluencerSearchComponent implements OnInit {

  searchValue: string;
  influencerList: Influencer[] = [];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private influenserService: InfluencerService) {
  }

  ngOnInit() {
    this.searchValue = this.route.snapshot.params['query'];
    this.titleService.setTitle('جستجو برای' + this.searchValue);

    this.influenserService.Search(this.searchValue).subscribe((res: Influencer[]) => {
      this.influencerList = res;
    });
  }
}
