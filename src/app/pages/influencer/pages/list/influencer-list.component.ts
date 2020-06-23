import { Component, OnInit } from '@angular/core';

import { Influencer } from '../../models/influencer';
import { InfluencerService } from '../../services/influencer.service';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ActivatedRoute, Router } from '@angular/router';
import * as deconsult from '../../../../../assets/js/deconsult';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-influencer',
  templateUrl: 'influencer-list.component.html',
  styleUrls: ['influencer-list.component.css']
})

export class InfluencerListComponent extends CrudComponent<Influencer> implements OnInit {

  influencerList: Influencer[] = [];
  categoryId: number;

  constructor(private influencerService: InfluencerService, route: ActivatedRoute, 
    router: Router, private titleService: Title) {

    super(influencerService, route, router);

    this.items = new Array<Influencer>();
  }

  ngOnInit() {
    this.titleService.setTitle("محصولات گالری شمس");

    this.categoryId = this.route.snapshot.params['id'];

    if (this.categoryId) {
      this.InfluencerByCategory();
    }
    else {
      this.GetCustomerInfluencerList();
    }

    setTimeout(function () { deconsult.init(); }, 200);
  }

  InfluencerByCategory() {

    this.influencerService.InfluencerByCategory(this.categoryId)
      .subscribe((res: Influencer[]) => {

        this.influencerList = res
      })
  }

  GetCustomerInfluencerList() {

    this.influencerService.CustomeGetAllInfluencers()
      .subscribe((res: Influencer[]) => {
        this.influencerList = res
      })

  }
}
