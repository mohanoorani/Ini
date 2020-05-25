import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './pages/list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
// import { CategoryListComponent } from './pages/list/category-list.component';
// import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {path:'',component:CategoryListComponent},
  {path:'Add',component:CategoryComponent},
  {path:'Edit/:id',component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
