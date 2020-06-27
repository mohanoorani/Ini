import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';


@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<Category[]> {
    return this.httpClient.post<Category[]>(environment.baseUrl + "/sp/business/GetInstagramProfileTypes", {});
  }
}