import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserPanelComponent } from "./pages/userPanel.component";
import { ProfileComponent } from "./childrens/profile/profile.component";
import { MessageComponent } from "./childrens/message/message.component";
import { InstagramComponent } from "./childrens/instagram/instagram.component";

const userPanelRoute: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    children: [
      { path: '', redirectTo: 'profile' },
      { path: 'profile', component: ProfileComponent },
      { path: 'message', component: MessageComponent },
      { path: 'instagram', component: InstagramComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      userPanelRoute,
    )

  ]
})
export class UserPanelRouteModule { }