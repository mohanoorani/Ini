import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { BlogListComponent } from './pages/list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogService } from './services/blog.service';
import { AppBlogListComponent } from './components/app-blog-list/app-blog-list.component';
import { AppSingleBlogComponent } from './components/app-single-blog/app-single-blog.component';

@NgModule({
  declarations:
    [
      BlogListComponent,
      BlogComponent,
      AppBlogListComponent,
      AppSingleBlogComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,

  ],
  providers: [BlogService],
  exports: [
      AppBlogListComponent,
      AppSingleBlogComponent
    ]
})
export class BlogModule {
  constructor() {
  }
}
