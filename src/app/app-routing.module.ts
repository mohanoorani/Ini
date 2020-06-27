import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule' },
  { path: 'influencers/:id', loadChildren: './pages/influencer/influencer.module#InfluencerModule' },
  { path: 'categories', loadChildren: './pages/category/category.module#CategoryModule' },
  { path: 'contactus', loadChildren: './pages/contactus/contactus.module#ContactUsModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
  { path: 'sitemap', loadChildren: './pages/sitemap/sitemap.module#SitemapModule' },
  { path: '**', loadChildren: './pages/notfound/notfound.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
