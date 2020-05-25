import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./pages/dashboard.component";

const dashboardRoute: Routes = [
  { path: '', component: DashboardComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(
      dashboardRoute,
    )

  ]
})
export class DashboardRouteModule {}