import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '@app/shared/services';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private authToken: string = '-';
  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.isLoggedIn()) {
      this.authToken = this.authService.getAuthorizationHeaderValue();
    }

    const request = req.clone({ setHeaders: { Authorization: 'bearer ' + this.authToken } });

    return next.handle(request).pipe(
      catchError((err: any) => {
        debugger;
        if (err && err instanceof HttpErrorResponse && err.status === 403)
          this.alertify.error('شما دسترسی لازم به عملیات مورد نظر ندارید.');
        else if (err && err instanceof HttpErrorResponse && err.status === 401) {
          this.authService.logOut();
          this.alertify.error('لطفا مجدد وارد سایت شوید');
          this.route.navigate(['/']);
        }
        else if (err)
          this.alertify.error(err.error);


        throw of(err);
      }));
  }
}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/