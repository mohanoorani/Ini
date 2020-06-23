import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Influencer } from '../models/influencer';
import { HttpService } from '@app/shared/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Router } from '@angular/router';


@Injectable()
export class InfluencerService extends HttpService<Influencer> {

  constructor(private httpClient: HttpClient, private route: Router) {
    super(httpClient);
    this.endpoint = "Influencer";
    this.url = this.baseUrl + "/api/" + this.endpoint + "/"

  }

  public CustomeGetAllInfluencers(): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(environment.baseUrl + "/api/Influencer/CustomerInfluencerList");
  }
  
  public InfluencerByCategory(categoryId: number): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(environment.baseUrl + "/api/Influencer/InfluencerByCategory/" + categoryId);
  }

  public GetInfluencerDetail(influencerId: number): Observable<Influencer> {
    return this.httpClient.get<Influencer>(environment.baseUrl + "/api/Influencer/GetInfluencerDetail/" + influencerId);
  }
  
  public Search(value: string): Observable<Influencer[]> {
    return this.httpClient.get<Influencer[]>(environment.baseUrl + "/api/Influencer/Search/" + value);
  }
}