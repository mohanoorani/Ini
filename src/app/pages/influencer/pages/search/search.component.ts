import { Component, OnInit } from '@angular/core';

import { Influencer } from '../../models/influencer';
import { InfluencerService } from '../../services/influencer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-influencer-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class InfluencerSearchComponent implements OnInit {

  influencerList: Influencer[] = [];
  value: string;
  
  constructor(private influencerService: InfluencerService,private route: ActivatedRoute, 
    private router: Router, private titleService: Title) {
      
  }

  ngOnInit() {

    this.value = this.route.snapshot.params['value'];

    this.titleService.setTitle('جستجوی ' + this.value);
    
    if (this.value) {
      this.influencerService.Search(this.value).subscribe((res: Influencer[]) => {
        this.influencerList = res;
      });
    }
    else {
      this.router.navigate(['/influencer']);
    }
  }
}
