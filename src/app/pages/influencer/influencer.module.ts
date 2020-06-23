import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { InfluencerListComponent } from './pages/list/influencer-list.component';
import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './pages/influencer/influencer.component';
import { InfluencerService } from './services/influencer.service';
import { AppInfluencerListComponent } from './components/app-influencer-list/app-influencer-list.component';
import { AppInfluencerDetailComponent } from './components/app-influencer-detail/app-influencer-detail.component';
import { AppSingleInfluencerComponent } from './components/app-single-influencer/app-single-influencer.component';
import { InfluencerSearchComponent } from './pages/search/search.component';
import { TagsComponent } from './pages/tags/tags.component';

@NgModule({
  declarations:
    [
      InfluencerListComponent,
      InfluencerComponent,
      AppInfluencerListComponent,
      AppInfluencerDetailComponent,
      AppSingleInfluencerComponent,
      InfluencerSearchComponent,
      TagsComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    InfluencerRoutingModule,

  ],
  providers: [InfluencerService],
  exports: [
    AppInfluencerListComponent,
    AppInfluencerDetailComponent,
    AppSingleInfluencerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfluencerModule {
  constructor() {
  }
}
