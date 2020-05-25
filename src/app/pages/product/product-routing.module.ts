import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './pages/list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductSearchComponent } from './pages/search/search.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'detail/:id/:title',component:ProductComponent},
  {path:'tags/:id/:title',component:TagsComponent},
  {path:'search/:value',component: ProductSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
