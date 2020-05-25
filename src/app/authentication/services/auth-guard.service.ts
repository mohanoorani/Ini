import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';


import { AuthService } from './auth.service'
import { Permission } from '@app/core/models';
import { PermissionService } from './permission.service';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  private permission: Permission = new Permission();
  constructor(private authService: AuthService, private permissionService: PermissionService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['account/login']);
    return false;

  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (route.data.permission) {
      this.permission.subject = route.data.permission.subject;
      this.permission.task = route.data.permission.task;
      return this.permissionService.HasPermission(this.permission.subject, this.permission.task);
    }

    return false;

  }
}
