import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { PaymentInfoRoutingModule } from './paymentInfo-routing.module';
import { PaymentInfoComponent } from './pages/paymentInfo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
      PaymentInfoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PaymentInfoRoutingModule
  ]
})
export class PaymentInfoModule {
  constructor() {
  }
}
