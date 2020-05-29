import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {

  endpoint = "/Auth/SendVerificationSms";
  url = environment.baseUrl + this.endpoint + "/";

  constructor(private httpClient: HttpClient) {

  }

  public Login(mobileNumber: string): Observable<string> {
    return this.httpClient.post<string>(this.url, mobileNumber);
  }

}