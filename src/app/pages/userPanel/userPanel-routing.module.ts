import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserPanelComponent } from "./pages/userPanel.component";
import { ProfileComponent } from "./childrens/profile/profile.component";
import { MessageComponent } from "./childrens/message/message.component";
import { InstagramComponent } from "./childrens/instagram/instagram.component";
import { BankInfoComponent } from "./childrens/bankinfo/bankinfo.component";
import { PaymentInfoComponent } from "./childrens/paymentinfo/paymentinfo.component";
import { RequestListComponent } from "./childrens/request/pages/list/request-list.component";
import { SingleRequestComponent } from "./childrens/request/pages/single/single-request.component";

const userPanelRoute: Routes = [
  {
    path: '', component: UserPanelComponent,
    children: [
      { path: '', redirectTo: 'profile' },
      { path: 'profile', component: ProfileComponent },
      { path: 'message', component: MessageComponent },
      { path: 'instagram', component: InstagramComponent },
      { path: 'bankinfo', component: BankInfoComponent },
      { path: 'paymentinfo', component: PaymentInfoComponent },
      { path: 'requests', component: RequestListComponent },
      { path: 'requests/:requestCode', component: SingleRequestComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(userPanelRoute)],
  exports: [RouterModule]
})
export class UserPanelRouteModule { }