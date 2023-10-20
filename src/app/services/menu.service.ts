import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NAVS } from "@app/constants";
import { INav } from "@app/interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class MenuService {
  menu$: BehaviorSubject<Array<INav>> = new BehaviorSubject([] as Array<INav>);
  constructor(
    private router: Router,
  ) {}

  init() {
    const _menu = NAVS.filter(navItem => !!navItem.show);
    this.setMenu = _menu;
  }

  get getMenu(): INav[] {
    return this.menu$.value;
  }

  set setMenu(menu: INav[]) {
    this.menu$.next(menu);
  }
}
