import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';


import { AuthService } from './auth.service'
import { PermissionService } from './permission.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private permissionService: PermissionService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
debugger;

    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['account/login']);
    return false;

  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return true;

  }
}
