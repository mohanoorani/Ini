import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateRequest } from '../models/createrequest';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';
import { AuthService } from '@app/authentication/services';


@Injectable()
export class RequestService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  public UplodaAttachment(file: File): Observable<any> {
    let formData = new FormData();

    if (file !== undefined)
      formData.append("File", file, file.name);

    return this.httpClient.post<any>(
      environment.baseUrl + "/file/upload", formData);
  }

  public CreateRequest(model: CreateRequest): Observable<CreateRequest[]> {
    return this.httpClient.post<CreateRequest[]>(environment.baseUrl + "/sp/business/StartRequest", 
    {
      OriginUserID: this.authService.getUserInfo().id,
      OriginInstagramID : model.OriginInstagramID,
      DestinationInstagramID : model.DestinationInstagramID,
      PresenceOnSite: model.PresenceOnSite,
      IsStory: model.IsStory,
      IsPost: model.IsPost,
      IsCOntent : model.IsContent,
      FileID: model.FileID,
      Description: model.Description
    });
  }
}