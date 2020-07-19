import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { InfluencerListComponent } from './pages/list/influencer-list.component';
import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './pages/single/influencer.component';
import { InfluencerService } from './services/influencer.service';
import { AppInfluencerListComponent } from './components/app-influencer-list/app-influencer-list.component';
import { AppSingleInfluencerComponent } from './components/app-single-influencer/app-single-influencer.component';
import { FormsModule } from '@angular/forms';
import { InfluencerSearchComponent } from './pages/search/search.component';
import { AppCreateRequestComponent } from './components/app-create-request/app-create-request.component';

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
  providers: [InfluencerService],
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
