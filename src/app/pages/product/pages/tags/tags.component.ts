import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpService } from '@app/shared/services';
import { Product } from '@app/pages/product/models/product';
import { ProductService } from '@app/pages/product/services/product.service';
import { HttpClient } from '@angular/common/http';
import * as deconsult from '../../../../../assets/js/deconsult';

@Component({
  selector: 'app-tags',
  templateUrl: 'tags.component.html',
  styleUrls: ['tags.component.css']
})

export class TagsComponent extends HttpService<Product> implements OnInit {

  productList: Product[] = [];
  productId: number;

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private titleService: Title, private httpClient: HttpClient) {

    super(httpClient);

  }

  ngOnInit() {

    var tagTitle: string = this.route.snapshot.params['title'];
    tagTitle = tagTitle.replace(new RegExp("-", "g"), ' ');

    this.titleService.setTitle(tagTitle);

    this.productId = this.route.snapshot.params['id'];

    if (this.productId) {

      this.productService.GetProductDetail(this.productId).subscribe((result: Product) => {
        this.productList.push(result);
      });
    }

    setTimeout(function () { deconsult.init(); }, 200);
  }
}
