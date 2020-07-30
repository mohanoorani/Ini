import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RequestListComponent } from './pages/list/request-list.component';
import { SingleRequestComponent } from './pages/single/single-request.component';
import { AppRequestListComponent } from './components/app-request-list/app-request-list.component';
import { AppRequestHistoryComponent } from './components/app-request-history/app-request-history.component';
import { RequestRoutingModule } from './request-routing.module';
import { InfluencerModule } from '@app/pages/influencer/influencer.module';
import { FormsModule } from '@angular/forms';
import { AppRequestDetailComponent } from './components/app-request-detail/app-request-detail.component';

@NgModule({
  declarations:
    [
      RequestListComponent,
      SingleRequestComponent,
      AppRequestListComponent,
      AppRequestHistoryComponent,
      AppRequestDetailComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RequestRoutingModule,
    InfluencerModule
  ]
})
export class RequestModule {
  constructor() {
  }
}
