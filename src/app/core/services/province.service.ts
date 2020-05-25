import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Province } from '../models/province';

import { City } from '../models/city';
import { Region } from '../models/region';
import { environment } from '@env/environment';


@Injectable()
export class ProvinceService {

  baseUrl = environment.baseUrl;
  endpoint = "/api/province/";
  
  constructor(private httpClient :HttpClient){
  }

  getAll(): Observable<Province[]> {
    return this.httpClient.get<Province[]>(this.baseUrl + this.endpoint);
  }

  getCitiesByProvince(Id: number): Observable<City[]> {
    return this.httpClient.get<City[]>(this.baseUrl + this.endpoint + Id + "/cities");
  }

  getRegionsByCity(Id: number): Observable<Region[]> {
    return this.httpClient.get<Region[]>(this.baseUrl + this.endpoint + 1 + "/cities/" + Id + "/regions");
  }
}