import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthService } from '@app/authentication/services';
import { environment } from '@env/environment.prod';
import { Influencer } from '@app/pages/influencer/models/influencer';
import { Bank } from '../models/bank';
import { UserAccountInfo } from '../models/useraccountInfo';

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

  public GetUserAccountInfo(): Observable<UserAccountInfo[]> {
    return this.httpClient.post<UserAccountInfo[]>(
      environment.baseUrl + "/sp/uac/GetAccountInfo", { UserID: this.userId });
  }

  public SaveUserAccountInfo(accountInfo: UserAccountInfo): Observable<any> {
    debugger;
    return this.httpClient.post<any>(
      environment.baseUrl + "/sp/uac/UpdateAccountInfo", 
      { 
        UserID: this.userId,
        AccountNo: accountInfo.AccountNo, 
        CartNo: accountInfo.CartNo, 
        IBAN: accountInfo.Iban, 
        _BankID: +accountInfo._BankID
      });
  }

  public GetBanks(): Observable<Bank[]> {
    return this.httpClient.post<Bank[]>(
      environment.baseUrl + "/sp/common/getbanks", { });
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

    return this.httpClient.post<any>(
      "http://inisito.com:888/api/auth/SendVerificationCodeDirectMessage", { Username: instagramId });
  }

  public ConfirmInstagramVerificationCode(instagramId: string, code: number): Observable<any> {
    return this.httpClient.post<any>(
      environment.baseUrl + "/auth/ConfirmInstagramVerificationCode", { Username: instagramId, Code: code });
  }

  public GetAllAccounts(): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      {InstagramID : null, InstagramPageTypeID: null, UserID: this.userId});
  }
}