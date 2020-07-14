import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelRouteModule } from './userPanel-routing.module';
import { UserPanelComponent } from './pages/userPanel.component';
import { UserPanelService } from './services/userPanel.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ContactUsService } from '../contactus/services/contactus.service';
import { ProfileComponent } from './childrens/profile/Profile.component';
import { MessageComponent } from './childrens/message/message.component';
import { FormsModule } from '@angular/forms';
import { InstagramComponent } from './childrens/instagram/instagram.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserPanelRouteModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    UserPanelComponent,
    ProfileComponent,
    MessageComponent,
    InstagramComponent
  ],
  providers: [
    UserPanelService,
    ContactUsService,
  ]
})
export class UserPanelModule {}
