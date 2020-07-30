import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentInfoComponent } from './pages/paymentInfo.component';

const routes: Routes = [
  { path: '', component: PaymentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentInfoRoutingModule { }
