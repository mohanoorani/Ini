import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserPanelComponent } from "./pages/userPanel.component";

const userPanelRoute: Routes = [
  {
    path: '', component: UserPanelComponent,
    children: [
      { path: '', redirectTo: 'profile' },
      { path: 'profile', loadChildren: './childrens/profile/profile.module#ProfileModule' },
      { path: 'message', loadChildren: './childrens/message/message.module#MessageModule' },
      { path: 'instagram', loadChildren: './childrens/instagram/instagram.module#InstagramModule' },
      { path: 'bankinfo', loadChildren: './childrens/bankInfo/bankInfo.module#BankInfoModule' },
      { path: 'payments', loadChildren: './childrens/payment/payment.module#PaymentModule' },
      { path: 'requests', loadChildren: './childrens/request/request.module#RequestModule' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(userPanelRoute)],
  exports: [RouterModule]
})
export class UserPanelRouteModule { }