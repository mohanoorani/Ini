import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ContactUsService } from './services/contactus.service';
import { ContactUsComponent } from './pages/contactus.component';
import { ContactUsRoutingModule } from './contactus-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      ContactUsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ContactUsRoutingModule
  ],
  providers: [ContactUsService],
})
export class ContactUsModule {
  constructor() {
  }
}
