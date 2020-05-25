import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './pages/list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations:
    [
      CategoryListComponent,
      CategoryComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
  ],
  providers: [],
})
export class CategoryModule { }
