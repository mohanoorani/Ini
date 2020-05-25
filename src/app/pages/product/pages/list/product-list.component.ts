import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ActivatedRoute, Router } from '@angular/router';
import * as deconsult from '../../../../../assets/js/deconsult';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent extends CrudComponent<Product> implements OnInit {

  productList: Product[] = [];
  categoryId: number;

  constructor(private productService: ProductService, route: ActivatedRoute, 
    router: Router, private titleService: Title) {

    super(productService, route, router);

    this.items = new Array<Product>();
  }

  ngOnInit() {
    this.titleService.setTitle("محصولات گالری شمس");

    this.categoryId = this.route.snapshot.params['id'];

    if (this.categoryId) {
      this.ProductByCategory();
    }
    else {
      this.GetCustomerProductList();
    }

    setTimeout(function () { deconsult.init(); }, 200);
  }

  ProductByCategory() {

    this.productService.ProductByCategory(this.categoryId)
      .subscribe((res: Product[]) => {

        this.productList = res
      })
  }

  GetCustomerProductList() {

    this.productService.CustomerProductList()
      .subscribe((res: Product[]) => {
        this.productList = res
      })

  }
}
