
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { HttpService } from '@app/shared/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Category } from '@app/pages/category/models';
import { Rotator } from '../models/rotator';


@Injectable()
export class DashboardService extends HttpService<any> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = "Category";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"

  }

  public GetDashboardCategories(): Observable<Category[]> {
    this.endpoint = "Category";
    return this.httpClient.get<Category[]>(environment.baseUrl + "/api/Category/GetDashboardCategories");
  }

  public GetDashboardRotators(): Observable<Rotator[]> {
    return this.httpClient.get<Category[]>(environment.baseUrl + "/api/Rotator/GetDashboardRotators");
  }


}