import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BankInfoRoutingModule } from './bankInfo-routing.module';
import { BankInfoComponent } from './pages/bankInfo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
      BankInfoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BankInfoRoutingModule
  ]
})
export class BankInfoModule {
  constructor() {
  }
}
