import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { HttpService } from '@app/shared/services/http.service';

@Injectable()
export class ProfileService extends HttpService<any> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = "Category";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"
  }
}