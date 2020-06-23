import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { InfluencerService } from '../../services/influencer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Influencer } from '../../models/influencer';
import { AppInfluencerDetailComponent } from '../../components/app-influencer-detail/app-influencer-detail.component';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent extends CrudComponent<Influencer> implements OnInit {

  influencerId: number;
  @ViewChild('influencerDetail') influencerDetail: AppInfluencerDetailComponent;

  constructor(private influencerService: InfluencerService, route: ActivatedRoute, router: Router) {

    super(influencerService, route, router);
  }

  ngOnInit() {
    this.influencerId = this.route.snapshot.params['id'];
    this.influencerDetail.GetInfluencerDetail(this.influencerId, 'all');
  }
}
