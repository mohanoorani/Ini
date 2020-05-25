import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudComponent } from '@app/shared/components/Crud/crud.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { AppProductDetailComponent } from '../../components/app-product-detail/app-product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends CrudComponent<Product> implements OnInit {

  productId: number;
  @ViewChild('productDetail') productDetail: AppProductDetailComponent;

  constructor(private productService: ProductService, route: ActivatedRoute, router: Router) {

    super(productService, route, router);
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.productDetail.GetProductDetail(this.productId, 'all');
  }
}
