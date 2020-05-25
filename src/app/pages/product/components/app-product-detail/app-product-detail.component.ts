import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import * as deconsult from '../../../../../assets/js/deconsult';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './app-product-detail.component.html',
  styleUrls: ['./app-product-detail.component.css']
})
export class AppProductDetailComponent implements OnInit {

  product: Product;
  showCloseModalButton: boolean

  constructor(private productService: ProductService, private titleService: Title) { }

  ngOnInit() { }

  public GetProductDetail(id: number, viewType: string) {

    this.showCloseModalButton = (viewType == 'quick')

    this.productService.GetProductDetail(id)
      .subscribe((res: Product) => {

        this.product = res;

        if (this.product.Tags != '' && this.product.Tags) {

          this.product.TagList = [];
          this.product.Tags.split('/').forEach(x => {
            this.product.TagList.push({ name: x, url: x.replace(new RegExp(" ", "g"), '-') });
          });
        }

        if (viewType == 'quick') {
          this.product.Description = "";
          this.product.ProductImages = [];
        }
        else
          this.titleService.setTitle(this.product.Title);


        setTimeout(function () { deconsult.init(); }, 200);
      });
  }
}