import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IMenuItem } from '@app/interfaces';
import { MenuService } from '@app/services';
import { enviroment } from '@enviroments/enviroment';

@Component({
  selector: 'tt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('menu') menuElement!: ElementRef<HTMLElement>;

  menu: IMenuItem[] = [];
  env = enviroment;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu;
  }

  ngOnDestroy(): void {
    this.menuService.scrollBody(true);
  }

  closeMenu() {
    this.menuService.toggleVisibleMenu$.next(false);
  }

}
