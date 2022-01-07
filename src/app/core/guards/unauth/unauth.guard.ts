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
    if (!Util.user) {
      if (
        route.routeConfig?.path === 'verification' ||
        route.routeConfig?.path === 'confirmation' ||
        route.routeConfig?.path === 'attemption'
      ) {
        const email: string | undefined =
          this.service.getCurrentNavigationExtras()?.email;
        const isEmail: boolean = Util.isEmail(email);
        if (isEmail) {
          return true;
        }
      } else if (route.routeConfig?.path === 'expiration') {
        const isSessionExpired: boolean = Util.isSessionExpired();
        if (isSessionExpired) {
          return true;
        }
      } else {
        return true;
      }
    }

    return this.service.navigate(['/home']);
  }
}
