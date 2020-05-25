
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Blog } from '../models/blog';
import { HttpService } from '@app/shared/services/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';


@Injectable()
export class BlogService extends HttpService<Blog> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = "Blog";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"

  }

  
  public GetBlog(BlogId: number): Observable<Blog> {
    return this.get(this.url + "/api/Blog/" + BlogId);
  }

}