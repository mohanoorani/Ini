import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '@app/shared/services/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class SitemapService extends HttpService<string> {

  constructor(private httpClient: HttpClient, private route: Router) {
    super(httpClient);
    this.endpoint = "Sitemap";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"
  }

  get(): Observable<string> {

    return this.httpClient.get<string>(this.url);
  }

}