import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Product } from '../models/product';
import { HttpService } from '@app/shared/services/http.service';
import { Pair } from '@app/core/models';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { CustomTask } from '@app/core/models/custom-task';
import { Router } from '@angular/router';


@Injectable()
export class ProductService extends HttpService<Product> {

  constructor(private httpClient: HttpClient, private route: Router) {
    super(httpClient);
    this.endpoint = "Product";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"

  }

  public CustomerProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.baseUrl + "/api/Product/CustomerProductList");
  }
  
  public ProductByCategory(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.baseUrl + "/api/Product/ProductByCategory/" + categoryId);
  }

  public GetProductDetail(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(environment.baseUrl + "/api/Product/GetProductDetail/" + productId);
  }
  
  public Search(value: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.baseUrl + "/api/Product/Search/" + value);
  }
}