import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { InfluencerListComponent } from './pages/list/influencer-list.component';
import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './pages/influencer/influencer.component';
import { InfluencerService } from './services/influencer.service';
import { AppInfluencerListComponent } from './components/app-influencer-list/app-influencer-list.component';
import { AppSingleInfluencerComponent } from './components/app-single-influencer/app-single-influencer.component';
import { InfluencerSearchComponent } from './pages/search/search.component';

@NgModule({
  declarations:
    [
      InfluencerListComponent,
      InfluencerComponent,
      AppInfluencerListComponent,
      AppSingleInfluencerComponent,
      InfluencerSearchComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    InfluencerRoutingModule,

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
