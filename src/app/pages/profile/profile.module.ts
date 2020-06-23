import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouteModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile.component';
import { ProfileService } from './services/profile.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ContactUsService } from '../contactus/services/contactus.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileRouteModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    ProfileService,
    ContactUsService,
  ]
})
export class ProfileModule {}
