import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouteModule } from './dashboard.route';
import { DashboardComponent } from './pages/dashboard.component';
import { DashboardCategoryComponent } from './components/dash-category/dash-category.component';
import { DashboardRotatorComponent } from './components/dash-rotator/dash-rotator.component';
import { DashboardService } from './services/dashboard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ContactUsService } from '../contactus/services/contactus.service';
import { DashboardCachingService } from './services/dashboard.cache';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouteModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    DashboardCategoryComponent,
    DashboardRotatorComponent,
  ],
  providers: [
    DashboardService,
    ContactUsService,
  ]
})
export class DashboardModule {}
