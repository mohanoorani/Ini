import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '@app/shared/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private authToken: string = '-';
  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.auth.isLoggedIn()) {
      this.authToken = this.auth.getAuthorizationHeaderValue();
    }

    const authReq = req.clone({ setHeaders: { Authorization: this.authToken } });

    // send cloned request with header to the next handler.
    //return next.handle(authReq);

    return next.handle(authReq).pipe(
      catchError((err: any) => {

        if (err && err instanceof HttpErrorResponse && err.status === 403)
          this.alertify.error('شما دسترسی لازم به عملیات مورد نظر ندارید.');
        else if (err && err instanceof HttpErrorResponse && err.status === 401)
          this.alertify.error('نام کاربری یا رمز عبور اشتباه است');
        else if (err)
          this.alertify.error(err.error.error);
        else
          return of(err);
      }));
  }

}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/