import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,  
    
  ],
  declarations: []
})


 export class AuthenticationModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthenticationModule) {

    if (parentModule) {
      throw new Error(
        'AuthenticationModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
       
      ]
    };
  }
}
