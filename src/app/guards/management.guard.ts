import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ROUTE } from "tt-library-angular-porfolio";
import { DeviceIdService } from "@app/services";
import { Observable } from "rxjs";

export const managementActiveGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return inject(DeviceIdService).accepted ? true : inject(Router).navigate([ROUTE.NOT_FOUND]);
};
