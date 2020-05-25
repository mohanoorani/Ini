import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ContactUs } from '../models/contactus';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';


@Injectable()
export class ContactUsService {

  endpoint = "ContactUs";
  url = environment.baseUrl + "/api/" + this.endpoint + "/";

  constructor(private httpClient: HttpClient) {

  }

  public Save(item: ContactUs, file: File): Observable<void> {

    let formData = new FormData();
    formData.append("FullName", item.FullName);
    formData.append("MobileNumber", item.MobileNumber);
    formData.append("Description", item.Description);
    formData.append("Id", "0");

    if (file !== undefined)
      formData.append("File", file, file.name);

    
    return this.httpClient.post<void>(environment.baseUrl + "/api/ContactUs", formData);
  }

}