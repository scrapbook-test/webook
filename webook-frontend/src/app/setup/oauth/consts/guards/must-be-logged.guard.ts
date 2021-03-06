import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';

import { OauthManagerService } from '../../services/oauth-manager.service';

@Injectable()
export class MustBeLoggedAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: OauthManagerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.hasValidToken().pipe(tap(res => {
      if (!res) {
        this.router.navigateByUrl('/welcome');
      }
    }));
  }
}
