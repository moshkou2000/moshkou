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
      if (Util.getViewStates().isLogin || Util.getViewStates().isRegistration) {
        if (route.routeConfig?.path === '') {
          return true;
        }
        return this.service.navigate(['']);
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
        return this.service.navigate(['/confirmation']);
      } else if (Util.getViewStates().isAttemption) {
        if (route.routeConfig?.path === 'attemption') {
          if (Util.getUser()?.email !== undefined) return true;
          Util.clear();
        }
        return this.service.navigate(['/attemption']);
      } else if (Util.getViewStates().isExpiration) {
        if (route.routeConfig?.path === 'expiration') {
          if (Util.isSessionExpired()) {
            return true;
          }
          Util.clear();
        }
        return this.service.navigate(['/expiration']);
      } else {
        return true;
      }
    }

    return this.service.navigate(['/home']);
  }
}
