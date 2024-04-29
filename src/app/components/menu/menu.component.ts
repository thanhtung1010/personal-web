import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { menuFloatIn, menuFloatOut } from '../../animations';
import { AppConfigService, AssetsLink, IMenuItem, MenuService } from 'tt-library-angular-porfolio';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tt-menu',
  templateUrl: './menu.component.html',
  animations: [menuFloatIn, menuFloatOut],
  standalone: true,
  imports: [
    CommonModule,
    AssetsLink,
    TranslateModule,
  ]
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('menu') menuElement!: ElementRef<HTMLElement>;

  @Input() visible: boolean = false;

  menu: IMenuItem[] = [];
  env = this.appConfig.appConfig;

  constructor(
    private menuService: MenuService,
    private appConfig: AppConfigService,
  ) { }

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
