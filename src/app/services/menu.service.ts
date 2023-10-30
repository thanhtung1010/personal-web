import { Injectable, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { NAVS } from "@app/constants";
import { INav } from "@app/interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class MenuService {
  menu$: BehaviorSubject<Array<INav>> = new BehaviorSubject([] as Array<INav>);

  hiddenScrollCls: string = 'tt-hidden_scroll';

  private bodyElement!: HTMLBodyElement;
  private menuElement!: HTMLElement;
  constructor() {}

  init() {
    this.bodyElement = document.querySelector('body') as HTMLBodyElement;
    const _menu = NAVS.filter(navItem => !!navItem.show);
    this.menu$.next(_menu);
  }

  onToggleMenu(visible: boolean) {
    if (this.bodyElement && this.menuElement) {
      if (visible) {
        this.bodyElement.appendChild(this.menuElement);
      } else {
        this.bodyElement.removeChild(this.menuElement);
      }
      this.scrollBody(!visible);
    } else {
      console.error('body or menu element does not exist')
    }
  }

  scrollBody(scroll: boolean) {
    const currentCls = this.bodyElement.className;
    if (this.bodyElement) {
      if (scroll) {
        this.bodyElement.className = `${currentCls} ${this.hiddenScrollCls}`;
      } else {
        this.bodyElement.className = `${currentCls.replace(this.hiddenScrollCls, '')}`;
      }
    } else {
      console.error('body or menu element does not exist')
    }
  }

  set setMenuElement(menu: HTMLElement) {
    this.menuElement = menu;
  }

  get getMenu(): INav[] {
    return this.menu$.value;
  }
}
