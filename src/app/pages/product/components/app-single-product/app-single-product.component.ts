import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { AppProductDetailComponent } from '../app-product-detail/app-product-detail.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './app-single-product.component.html',
  styleUrls: ['./app-single-product.component.css']
})
export class AppSingleProductComponent implements OnInit {

  @Input() product: Product;
  @Output() openQuickView: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  quickView(productId: number) {

    this.openQuickView.emit(productId);
    // document.getElementById("openModalButton").click();
  }
}