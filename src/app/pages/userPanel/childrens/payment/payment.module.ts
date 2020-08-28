import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { PaymentRoutingModule } from './payment-routing.module';
import { FormsModule } from '@angular/forms';
import { PaymentListComponent } from './pages/list/payment-list.component';
import { SinglePaymentComponent } from './pages/single/single-payment.component';

@NgModule({
  declarations:
    [
      PaymentListComponent,
      SinglePaymentComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule {
  constructor() {
  }
}
