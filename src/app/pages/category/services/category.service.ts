import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Category } from '../models/category';
import { HttpService } from '@app/shared/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';


@Injectable()
export class CategoryService extends HttpService<Category> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = "Category";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"

  }


  public GetDashboardCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(environment.baseUrl + "/api/Category/GetDashboardCategories");
  }

}