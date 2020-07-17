import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContactUsDetailComponent } from './components';
import { SharedServiceModule } from './services/shared-service.module';
import { FormsModule } from '@angular/forms';
import { AppLoginFormComponent } from './components/app-login-form/app-login-form.component';
import { LoginService } from './components/app-login-form/Services/LoginService';
import { AccountManagerComponent } from './components/app-account-manager/app-account-manager.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedServiceModule,
    RouterModule
  ]
  ,
  declarations: [
    AppContactUsDetailComponent,
    AppLoginFormComponent,
    AccountManagerComponent
  ]
  ,
  exports: [
    AppContactUsDetailComponent,
    AppLoginFormComponent,
    AccountManagerComponent
  ],
  providers: [SharedServiceModule, LoginService]
})


export class SharedModule { }
