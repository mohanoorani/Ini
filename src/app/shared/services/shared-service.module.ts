import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService,HttpService } from './index';
import { AlertifyService } from './alertify.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
     UtilityService,HttpService,AlertifyService
  ]
})
export class SharedServiceModule {}
