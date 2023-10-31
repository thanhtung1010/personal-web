import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IMenuItem } from '@app/interfaces';
import { MenuService } from '@app/services';
import { enviroment } from '@enviroments/enviroment';

@Component({
  selector: 'tt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menuElement!: ElementRef<HTMLElement>;

  menu: IMenuItem[] = [];
  env = enviroment;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu;
  }

}
