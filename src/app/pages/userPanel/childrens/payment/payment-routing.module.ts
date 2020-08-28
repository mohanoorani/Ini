import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './pages/list/payment-list.component';
import { SinglePaymentComponent } from './pages/single/single-payment.component';

const routes: Routes = [
  { path: '', component: PaymentListComponent },
  { path: ':paymentId', component: SinglePaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }