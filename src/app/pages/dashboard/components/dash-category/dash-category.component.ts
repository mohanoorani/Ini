import { Component, OnInit } from '@angular/core';

import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@app/pages/category/models';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardCachingService } from '../../services/dashboard.cache';

@Component({
  selector: 'app-dash-category',
  templateUrl: 'dash-category.component.html',
  styleUrls: ['dash-category.component.css']
})

export class DashboardCategoryComponent extends CrudComponent<Category> implements OnInit {

  categoryList: Category[] = [];

  constructor(private dashboardService: DashboardService, route: ActivatedRoute, router: Router,
    private dashCachingService: DashboardCachingService) {

    super(dashboardService, route, router);

    this.items = new Array<Category>();
  }

  ngOnInit() {


    let cacheValue = this.dashCachingService.getItem('category')
    {
      if (cacheValue != "") {
        this.categoryList = JSON.parse(cacheValue);
      }
      else {
        this.dashboardService.GetDashboardCategories()
          .subscribe((result: Category[]) => {

            this.categoryList = result;
            this.dashCachingService.setItem('category', JSON.stringify(this.categoryList));
          });
      }
    }
  }
}
