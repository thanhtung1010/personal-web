import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { DEFAULT_NAV, NAVS } from "@app/constants";
import { URLHelper } from "@app/helpers/url.helper";
import { INav } from "@app/interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class MenuService {
  menus$: BehaviorSubject<Array<INav>> = new BehaviorSubject([] as Array<INav>);
  currentMenu$: BehaviorSubject<INav> = new BehaviorSubject(DEFAULT_NAV);
  constructor(
    private router: Router,
  ) {}

  init() {
    const _menu = NAVS.filter(navItem => !!navItem.show);
    this.menus$.next(_menu);
    const _queryParamsObj = URLHelper.convertParamsToObject(URLHelper.getParamString()) || {};
    const _menuByQueryParams = this.menus$.value.find(menu => menu.queryParams === _queryParamsObj['view']);
    if (_menuByQueryParams) {
      this.setCurrentMenu = _menuByQueryParams;
    } else {
      this.setCurrentMenu = DEFAULT_NAV;
    }
    this.router.navigate([''], {
      queryParams: {
        view: this.currentMenu$.value.queryParams
      },
      queryParamsHandling: 'merge'
    })
  }

  get getCurrentMenu(): INav {
    return this.currentMenu$.value;
  }

  set setCurrentMenu(menu: INav) {
    this.currentMenu$.next(menu);
  }
}
