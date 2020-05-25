import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './pages/list/blog-list.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {path:'',component:BlogListComponent},
  {path:'detail/:id/:title',component:BlogComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
