import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { MENU } from "@app/constants";
import { IMenuItem } from "@app/interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class MenuService {

  menu$: BehaviorSubject<Array<IMenuItem>> = new BehaviorSubject([] as Array<IMenuItem>);
  toggleVisibleMenu$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  hiddenScrollCls: string = 'tt-hidden_scroll';

  constructor(private saniti: DomSanitizer) {}

  init() {
    const _menu = MENU.filter(menuItem => menuItem.show);
    this.menu$.next(_menu);
  }

  get getMenu(): IMenuItem[] {
    return this.menu$.value;
  }

  scrollBody(scroll: boolean) {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      const currentCls = bodyElement.className;
      if (scroll) {
        bodyElement.className = `${currentCls.replace(this.hiddenScrollCls, '')}`;
      } else {
        bodyElement.className = `${currentCls} ${this.hiddenScrollCls}`;
      }
    } else {
      console.error('body element does not exist')
    }
  }
}
