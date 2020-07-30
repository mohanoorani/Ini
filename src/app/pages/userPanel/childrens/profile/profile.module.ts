import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
      ProfileComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule {
  constructor() {
  }
}
