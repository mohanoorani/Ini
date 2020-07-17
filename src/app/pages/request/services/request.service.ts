import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRequest } from '../models/createrequest';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';


@Injectable()
export class RequestService {

  constructor(private httpClient: HttpClient) {
  }

  public CreateRequest(): Observable<CreateRequest[]> {
    return this.httpClient.post<CreateRequest[]>(environment.baseUrl + "/sp/business/GetInstagramProfileTypes", {});
  }
}