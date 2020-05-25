import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NotFoundRoutingModule } from './notfound-routing.module';
import { NotFoundComponent } from './pages/notfound.component';

@NgModule({
  declarations: [
      NotFoundComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    NotFoundRoutingModule
  ],
})
export class NotFoundModule {
  constructor() {
  }
}
