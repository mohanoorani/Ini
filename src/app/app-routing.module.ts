import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductModule' },
  { path: 'category/:id/:title', loadChildren: './pages/product/product.module#ProductModule' },
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
