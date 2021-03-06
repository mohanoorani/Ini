import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './authentication/services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'userpanel', loadChildren: './pages/userPanel/userPanel.module#UserPanelModule',canActivate:[AuthGuardService] },
  { path: 'influencers', loadChildren: './pages/influencer/influencer.module#InfluencerModule' },
  { path: 'categories', loadChildren: './pages/category/category.module#CategoryModule' },
  { path: '**', loadChildren: './pages/notfound/notfound.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
