import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { InfluencerListComponent } from './pages/list/influencer-list.component';
import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './pages/single/influencer.component';
import { InfluencerService } from './services/influencer.service';
import { AppInfluencerListComponent } from './components/app-influencer-list/app-influencer-list.component';
import { AppSingleInfluencerComponent } from './components/app-single-influencer/app-single-influencer.component';
import { InfluencerSearchComponent } from './pages/search/search.component';
import { UserPanelService } from '../userPanel/services/userPanel.service';
import { FormsModule } from '@angular/forms';
import { AppCreateRequestComponent } from '../request/components/app-create-request/app-create-request.component';
import { RequestService } from '../request/services/request.service';

@NgModule({
  declarations:
    [
      InfluencerListComponent,
      InfluencerComponent,
      InfluencerSearchComponent,
      AppInfluencerListComponent,
      AppSingleInfluencerComponent,
      AppCreateRequestComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    InfluencerRoutingModule,
    FormsModule
  ],
  providers: [InfluencerService, UserPanelService, RequestService],
  exports: [
    AppInfluencerListComponent,
    AppSingleInfluencerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfluencerModule {
  constructor() {
  }
}
