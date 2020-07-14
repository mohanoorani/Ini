import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'userpanel', loadChildren: './pages/userPanel/userPanel.module#UserPanelModule' },
  { path: 'influencers', loadChildren: './pages/influencer/influencer.module#InfluencerModule' },
  { path: 'categories', loadChildren: './pages/category/category.module#CategoryModule' },
  { path: 'contactus', loadChildren: './pages/contactus/contactus.module#ContactUsModule' },
  { path: 'sitemap', loadChildren: './pages/sitemap/sitemap.module#SitemapModule' },
  { path: '**', loadChildren: './pages/notfound/notfound.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
