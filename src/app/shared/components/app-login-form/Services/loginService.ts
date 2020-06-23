import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {

  url = environment.baseUrl + "/Auth";

  constructor(private httpClient: HttpClient) {

  }

  public Login(mobileNumber: string): Observable<string> {
    return this.httpClient.post<string>(`${this.url}/SendVerificationSms`, {Mobile: mobileNumber});
  }

  public ConfirmCode(mobileNumber: string, code: string): Observable<string> {
    return this.httpClient
      .post<any>(`${this.url}/ConfirmVerificationCode`,  {Mobile : mobileNumber, Code: +code});
  }
}