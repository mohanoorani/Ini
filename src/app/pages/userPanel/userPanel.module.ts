import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelRouteModule } from './userPanel-routing.module';
import { UserPanelComponent } from './pages/userPanel.component';
import { UserPanelService } from './services/userPanel.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './childrens/message/message.component';
import { InstagramComponent } from './childrens/instagram/instagram.component';
import { ProfileComponent } from './childrens/profile/profile.component';
import { BankInfoComponent } from './childrens/bankinfo/bankinfo.component';
import { InfluencerModule } from '../influencer/influencer.module';
import { PaymentInfoComponent } from './childrens/paymentinfo/paymentinfo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserPanelRouteModule,
    SharedModule,
    FormsModule,
    InfluencerModule
  ],
  declarations: [
    UserPanelComponent,
    ProfileComponent,
    MessageComponent,
    InstagramComponent,
    BankInfoComponent,
    PaymentInfoComponent
  ],
  providers: [
    UserPanelService
  ]
})
export class UserPanelModule {}
