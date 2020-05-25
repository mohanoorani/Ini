import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SitemapRoutingModule } from './sitemap-routing.module';
import { SitemapComponent } from './pages/sitemap.component';
import { SitemapService } from './services/sitemap.service';

@NgModule({
  declarations: [
      SitemapComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    SitemapRoutingModule
  ],
  providers: [SitemapService]
})
export class SitemapModule {
  constructor() {
  }
}
