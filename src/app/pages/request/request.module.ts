import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { RequestService } from './services/request.service';
import { AppCreateRequestComponent } from './components/app-create-request/app-create-request.component';

@NgModule({
  declarations:
    [
     AppCreateRequestComponent 
    ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [RequestService],
})

export class RequestModule { }
