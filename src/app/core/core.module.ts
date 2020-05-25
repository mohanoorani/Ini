import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreServiceModule } from './services/core-service.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreServiceModule,
    SharedModule
    
  ],
  declarations: [
    
      ],
  exports:[ 
   
  ],
  providers:[CoreServiceModule]
})
export class CoreModule  {}
