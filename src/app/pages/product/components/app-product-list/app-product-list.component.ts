import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { AppProductDetailComponent } from '../app-product-detail/app-product-detail.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {

  @Input() ProductList: Product[] = []
  @ViewChild('productDetail') productDetail: AppProductDetailComponent;
  showEmptyRow: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.showEmptyRow = true, 700);
  }

  quickView(productId: number) {
    this.productDetail.GetProductDetail(productId, 'quick');
    document.getElementById("openModalButton").click();
  }
}
