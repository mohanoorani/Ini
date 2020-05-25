import { Component, OnInit } from '@angular/core';

import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotator } from '../../models/rotator';
import { DashboardService } from '../../services/dashboard.service';
import * as deconsult from '../../../../../assets/js/deconsult';
import { DashboardCachingService } from '../../services/dashboard.cache';

@Component({
  selector: 'app-dash-rotator',
  templateUrl: 'dash-rotator.component.html',
  styleUrls: ['dash-rotator.component.css']
})

export class DashboardRotatorComponent extends CrudComponent<Rotator> implements OnInit {

  rotatorList: Rotator[] = [];

  constructor(private dashboardService: DashboardService, route: ActivatedRoute, router: Router,
    private dashCachingService: DashboardCachingService) {

    super(dashboardService, route, router);

    this.items = new Array<Rotator>();
  }

  ngOnInit() {

    let cacheValue = this.dashCachingService.getItem('rotator')
    {
      if (cacheValue != "") {
        this.rotatorList = JSON.parse(cacheValue);
        setTimeout(function () { deconsult.init(); }, 100);
      }
      else {
        this.dashboardService.GetDashboardRotators()
          .subscribe((result: Rotator[]) => {

            this.rotatorList = result;
            this.dashCachingService.setItem('rotator', JSON.stringify(this.rotatorList));
            setTimeout(function () { deconsult.init(); }, 100);

          });
      }
    }
  }
}
