import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Influencer } from '../models/influencer';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';

@Injectable()
export class InfluencerService {

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(categoryId: number): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      { InstagramID: null, InstagramPageTypeID: categoryId, UserID: null });
  }

  public GetByInstagramId(id: string): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      { InstagramID: id, InstagramPageTypeID: null, UserID: null });
  }

  public GetTopInstagramProfiles(): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetTopInstagramProfiles", {});
  }

  public Search(query: string): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramID", { 'InstagramName': query });
  }
}