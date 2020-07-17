import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import{AuthService,AuthInterceptor,AuthInterceptorProviderService,AuthGuardService} from './index'

@NgModule({
  providers:[AuthService,AuthGuardService,AuthInterceptor,AuthInterceptorProviderService]
})
export class AuthServiceModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthServiceModule) {

    if (parentModule) {
      throw new Error(
        'AuthenticationModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: AuthServiceModule,
      providers: [      
      ]
    };
  }
 }

 
