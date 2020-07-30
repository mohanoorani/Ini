import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { InstagramComponent } from './pages/instagram.component';
import { InstagramRoutingModule } from './instagram-routing.module';
import { FormsModule } from '@angular/forms';
import { InfluencerModule } from '@app/pages/influencer/influencer.module';

@NgModule({
  declarations:
    [
      InstagramComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InstagramRoutingModule,
    InfluencerModule
  ]
})
export class InstagramModule {
  constructor() {
  }
}
