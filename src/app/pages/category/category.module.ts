import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './pages/category.component';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations:
    [
      CategoryComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
  ],
  providers: [CategoryService],
})

export class CategoryModule { }
