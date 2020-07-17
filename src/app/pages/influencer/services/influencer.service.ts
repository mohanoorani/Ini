import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Influencer } from '../models/influencer';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';
import { Router } from '@angular/router';


@Injectable()
export class InfluencerService {

  constructor(private httpClient: HttpClient, private route: Router) {
  }

  public GetAll(categoryId: number): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      {InstagramID : null, InstagramPageTypeID: categoryId, UserID: null});
  }

  public GetByInstagramId(id: string): Observable<Influencer[]> {
    return this.httpClient.post<Influencer[]>(environment.baseUrl + "/sp/business/GetInstagramProfileInfo",
      {InstagramID : id, InstagramPageTypeID: null, UserID: null});
  }

  public GetById(id: number): Observable<Influencer> {
    return this.httpClient.get<Influencer>(environment.baseUrl + "/api/Influencer/CustomerInfluencerList");
  }

  public Search(name: string): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(environment.baseUrl + "/api/Influencer/CustomerInfluencerList");
  }
}