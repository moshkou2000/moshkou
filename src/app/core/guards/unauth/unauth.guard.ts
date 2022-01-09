import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IServices } from '../../services/services.service';
import { Util } from '../../utils/util';
@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
  constructor(private service: IServices) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (Util.isSessionExpired()) {
      console.log(
        '::guard',
        Util.getViewStates()?.state,
        Util.getViewStates().isNone,
        Util.getUser(),
        route.routeConfig?.path
      );

      if (Util.getViewStates().isNone) {
        if (
          route.routeConfig?.path === 'login' ||
          route.routeConfig?.path === 'registration'
        ) {
          return true;
        }
        return this.service.navigate(['/login']);
      } else if (Util.getViewStates().isVerification) {
        if (route.routeConfig?.path === 'verification') {
          if (Util.getUser()?.email !== undefined) return true;
          Util.clear();
        }
        return this.service.navigate(['/verification']);
      } else if (Util.getViewStates().isConfirmation) {
        if (route.routeConfig?.path === 'confirmation') {
          if (Util.getUser()?.email !== undefined) return true;
          Util.clear();
        }
        return this.service.navigate(['/registration']);
      } else if (Util.getViewStates().isAttemption) {
        if (route.routeConfig?.path === 'attemption') {
          if (Util.getUser()?.email !== undefined) return true;
          Util.clear();
        }
        return this.service.navigate(['/login']);
      } else if (Util.getViewStates().isExpiration) {
        if (route.routeConfig?.path === 'expiration') {
          if (Util.isSessionExpired()) return true;
        }
        return this.service.navigate(['/login']);
      } else {
        console.log(85, Util.getViewStates());
        return true;
      }
    }

    return this.service.navigate(['/home']);
  }
}
