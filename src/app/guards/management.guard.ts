import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ROUTE } from "@app/constants";
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
