import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./pages/profile.component";

const profileRoute: Routes = [
  { path: '', component: ProfileComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      profileRoute,
    )

  ]
})
export class ProfileRouteModule {}