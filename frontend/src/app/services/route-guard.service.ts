import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {CustomerLoginService} from "./customer-service/customer-login.service";

@Injectable()
export class RouterGuard implements CanActivate {

  constructor(private customerLoginService: CustomerLoginService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    let isLoggedIn = this.customerLoginService.isLoggedIn();
    let hasAccessToken = this.customerLoginService.hasValidAccessToken();

    return (isLoggedIn && hasAccessToken);
  }
}
