import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankInfoComponent } from './pages/bankInfo.component';

const routes: Routes = [
  { path: '', component: BankInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankInfoRoutingModule { }
