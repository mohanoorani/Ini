import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { RequestService } from './services/request.service';
import { AppCreateRequestComponent } from './components/app-create-request/app-create-request.component';
import { UserPanelService } from '../userPanel/services/userPanel.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
     AppCreateRequestComponent 
    ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers: [RequestService, UserPanelService],
})

export class RequestModule { }
