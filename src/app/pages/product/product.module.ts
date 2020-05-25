import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ProductListComponent } from './pages/list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductService } from './services/product.service';
import { AppProductListComponent } from './components/app-product-list/app-product-list.component';
import { AppProductDetailComponent } from './components/app-product-detail/app-product-detail.component';
import { AppSingleProductComponent } from './components/app-single-product/app-single-product.component';
import { ProductSearchComponent } from './pages/search/search.component';
import { TagsComponent } from './pages/tags/tags.component';

@NgModule({
  declarations:
    [
      ProductListComponent,
      ProductComponent,
      AppProductListComponent,
      AppProductDetailComponent,
      AppSingleProductComponent,
      ProductSearchComponent,
      TagsComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,

  ],
  providers: [ProductService],
  exports: [
    AppProductListComponent,
    AppProductDetailComponent,
    AppSingleProductComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule {
  constructor() {
  }
}
