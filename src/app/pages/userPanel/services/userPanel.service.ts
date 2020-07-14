import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { AuthService } from '@app/authentication/services';

@Injectable()
export class UserPanelService {

  userId: number;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.userId = authService.getUserInfo().id;
  }

  public GetUserProfile(): Observable<User> {
    return this.httpClient.post<User>(
      environment.baseUrl + "/sp/uac/GetUserInfo", { UserID: this.userId });
  }

  public SaveUserProfile(user: User): Observable<null> {
    return this.httpClient.post<null>(
      environment.baseUrl + "/sp/uac/UpdateUserInfo",
      {
        UserID: this.userId,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        Mobile: user.Mobile,
        NationalCode: user.NationalCode
      });
  }

  public VerifyInstagramProfile(instagramId: string): Observable<any> {

    const headers = new HttpHeaders({ 'Authorization': 'bearer ' + this.authService.getAuthorizationHeaderValue() });

    return this.httpClient.post<any>(
      environment.baseUrl + "/auth/SendVerificationCodeDirectMessage", { Username: instagramId }, { headers: headers });
  }

  public ConfirmInstagramVerificationCode(instagramId: string, code: string): Observable<any> {
    return this.httpClient.post<any>(
      environment.baseUrl + "/auth/ConfirmInstagramVerificationCode", { Username: instagramId, Code: code });
  }
}