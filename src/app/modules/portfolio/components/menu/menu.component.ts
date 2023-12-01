import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IMenuItem } from '@app/interfaces';
import { MenuService } from '@app/services';
import { enviroment } from '@environments/environment';
import { menuFloatIn, menuFloatOut } from '../../animations';

@Component({
  selector: 'tt-menu',
  templateUrl: './menu.component.html',
  animations: [menuFloatIn, menuFloatOut]
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('menu') menuElement!: ElementRef<HTMLElement>;

  @Input() visible: boolean = false;

  menu: IMenuItem[] = [];
  env = enviroment;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu;
  }

  onClickMenu(index: number) {
    this.menuService.activeRouter(index);
;  }

  ngOnDestroy(): void {
    this.menuService.scrollBody(true);
  }

  closeMenu() {
    this.menuService.toggleVisibleMenu$.next(false);
  }

}
