import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '@app/authentication/services/auth.service';
import { environment } from '@env/environment.prod';
import { Influencer } from '@app/pages/influencer/models/influencer';
import { Bank } from '../models/bank';
import { UserAccountInfo } from '../models/useraccountInfo';
import { Payment } from '../models/payment';
import { RequestHistory } from '../models/requesthistory';
import { Request } from '../models/request';
import { PaymentHistory } from '../models/paymenthistory';

@Injectable()
export class UserPanelService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getUserId() {
    var userId = null;
    var userInfo = this.authService.getUserInfo();

    if (userInfo)
      userId = userInfo.id;

    return userId;
  }

  public GetUserProfile(): Observable<User> {
    return this.httpClient.post<User>(
      environment.baseUrl + "/sp/uac/GetUserInfo", { UserID: this.getUserId() });
  }

  public GetUserAccountInfo(): Observable<UserAccountInfo[]> {
    return this.httpClient.post<UserAccountInfo[]>(
      environment.baseUrl + "/sp/uac/GetAccountInfo", { UserID: this.getUserId() });
  }

  public SaveUserAccountInfo(accountInfo: UserAccountInfo): Observable<any> {
    return this.httpClient.post<any>(
      environment.baseUrl + "/sp/uac/UpdateAccountInfo",
      {
        UserID: this.getUserId(),
        AccountNo: accountInfo.AccountNo,
        CartNo: accountInfo.CartNo,
        IBAN: accountInfo.Iban,
        _BankID: +accountInfo._BankID
      });
  }

  public GetBanks(): Observable<Bank[]> {
    return this.httpClient.post<Bank[]>(environment.baseUrl + "/sp/common/getbanks", {});
  }

  public SaveUserProfile(user: User): Observable<null> {
    return this.httpClient.post<null>(
      environment.baseUrl + "/sp/uac/UpdateUserInfo",
      {
        UserID: this.getUserId(),
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        Mobile: user.Mobile,
        NationalCode: user.NationalCode
      });
  }

  public VerifyInstagramProfile(instagramId: string): Observable<any> {

    return this.httpClient.post<any>(
      environment.baseUrl + "/auth/SendVerificationCodeDirectMessage", { Username: instagramId });
  }

  public ConfirmInstagramVerificationCode(instagramId: string, code: number): Observable<any> {
    return this.httpClient.post<any>(
      environment.baseUrl + "/auth/ConfirmInstagramVerificationCode", { Username: instagramId, Code: code });
  }

  public GetAllAccounts(): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      { InstagramID: null, InstagramPageTypeID: null, UserID: this.getUserId() });
  }

  public GetAccount(isntagramId: string): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      { InstagramID: isntagramId, InstagramPageTypeID: null, UserID: null });
  }

  public UplodaAttachment(file: File): Observable<any> {
    let formData = new FormData();

    if (file !== undefined) {
      formData.append("File", file, file.name);
      return this.httpClient.post<any>(environment.baseUrl + "/file/upload", formData);
    }
  }

  public downloadAttachment(fileName: string): Observable<Blob> {
    return this.httpClient.get(environment.baseUrl + "/file/download/" + fileName, { responseType: 'blob' });
  }

  public CreateRequest(model: Request): Observable<Request[]> {
    return this.httpClient.post<Request[]>(environment.baseUrl + "/sp/business/StartRequest",
      {
        OriginUserID: this.getUserId(),
        OriginInstagramID: model.OriginInstagramID,
        DestinationInstagramID: model.DestinationInstagramID,
        PresenceOnSite: model.PresenceOnSite,
        IsStory: model.IsStory,
        IsPost: model.IsPost,
        IsCOntent: model.IsContent,
        FileID: model.FileID,
        Description: model.Description
      });
  }

  public GetAllRequests(userId: number, requestCode: any, requestId: any): Observable<Request[]> {
    return this.httpClient.post<Request[]>(environment.baseUrl + "/sp/business/GetRequests",
      { RequestCode: requestCode, RequestID: requestId, UserID: userId });
  }

  public GetRequestHistory(requestId: number, userId: number): Observable<RequestHistory[]> {
    return this.httpClient.post<RequestHistory[]>(environment.baseUrl + "/sp/business/GetRequestHistory",
      { RequestID: requestId, UserID: userId });
  }

  public SendHistoryMessage(requestId: number, userId: number, comment: string): Observable<any> {
    return this.httpClient.post<RequestHistory[]>(environment.baseUrl + "/sp/business/UpdateRequestHistory",
      { RequestID: requestId, UserID: userId, Comment: comment });
  }

  public UpdateRequestPrice(requestId: number, price: number): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + "/sp/business/UpdateRequestPrice",
      { RequestID: requestId, Price: price.toString() });
  }

  public PublisherAccept(requestId: number): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + "/sp/business/UpdateRequestStatus_PublisherAccept",
      { RequestID: requestId });
  }

  public SideAccept(requestId: number): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + "/sp/business/UpdateRequestStatus_SidesAccept",
      { RequestID: requestId });
  }

  public SetStatusAsWaitForPayment(requestId: number): Observable<any> {
    return this.httpClient.post<any>(environment.baseUrl + "/sp/business/UpdateRequestStatus_WaitingPayment",
      { RequestID: requestId });
  }

  public GetPaymentUrl(requestId: number): Observable<string> {
    return this.httpClient.get<string>(environment.baseUrl + "/payment/" + requestId);
  }

  public GetPayments(userId: number): Observable<Payment[]> {
    return this.httpClient.post<Payment[]>(environment.baseUrl + "/sp/payment/GetPayments", { UserID: userId });
  }

  public GetPaymentHistory(paymentId: number, userId: number): Observable<PaymentHistory[]> {
    return this.httpClient.post<PaymentHistory[]>(environment.baseUrl + "/sp/payment/GetPaymentHistory", 
      { UserID: userId, PaymentID: paymentId });
  }
}