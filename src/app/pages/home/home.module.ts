import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './Home-routing.module';
import { HomeComponent } from './Pages/home.component';

@NgModule({
  declarations:
    [
      HomeComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,

  ],
  providers: [],
  exports: [
    ]
})
export class HomeModule {
  constructor() {
  }
}
