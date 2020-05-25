import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as deconsult from '../../../../../assets/js/deconsult';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class ProductSearchComponent implements OnInit {

  productList: Product[] = [];
  value: string;
  
  constructor(private productService: ProductService,private route: ActivatedRoute, 
    private router: Router, private titleService: Title) {
      
  }

  ngOnInit() {

    this.value = this.route.snapshot.params['value'];

    this.titleService.setTitle('جستجوی ' + this.value);
    
    if (this.value) {
      this.productService.Search(this.value).subscribe((res: Product[]) => {
        this.productList = res;
      });
    }
    else {
      this.router.navigate(['/product']);
    }

    setTimeout(function () { deconsult.init(); }, 200);
  }
}
