import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from './index';
import { AlertifyService } from './alertify.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
     UtilityService,
     AlertifyService
  ]
})
export class SharedServiceModule {}
