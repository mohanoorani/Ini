import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthServiceModule } from '@app/authentication/services/auth-service.module';
import { ProvinceService } from './province.service';

@NgModule({
  imports: [
    CommonModule, 
    AuthServiceModule.forRoot(),
  ],
  declarations: [],
  providers:[AuthServiceModule, ProvinceService]
})
export class CoreServiceModule {}
