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

  private backgroundElement!: HTMLDivElement;
  private menuElement!: HTMLElement;
  constructor(private saniti: DomSanitizer) {}

  init() {
    this.backgroundElement = document.getElementById('tt-menu_container') as HTMLDivElement;
    const _menu = MENU.filter(menuItem => menuItem.show);
    this.menu$.next(_menu);
  }

  onToggleMenu(visible: boolean) {
    if (this.backgroundElement && this.menuElement) {
      if (visible) {
        this.backgroundElement.appendChild(this.menuElement);
      } else {
        this.backgroundElement.removeChild(this.menuElement);
      }
      this.scrollBody(!visible);
    } else {
      console.error('body or menu element does not exist')
    }
  }

  scrollBody(scroll: boolean) {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      const currentCls = bodyElement.className;
      if (scroll) {
        bodyElement.className = `${currentCls} ${this.hiddenScrollCls}`;
      } else {
        bodyElement.className = `${currentCls.replace(this.hiddenScrollCls, '')}`;
      }
    } else {
      console.error('body element does not exist')
    }
  }

  set setMenuElement(menu: HTMLElement) {
    this.menuElement = menu;
  }

  get getMenu(): IMenuItem[] {
    return this.menu$.value;
  }

  set onToggleVisibleMenu(visible: boolean) {
    this.toggleVisibleMenu$.next(visible);
  }

  get visibleMenu(): boolean {
    return this.toggleVisibleMenu$.value;
  }
}
