import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_NAV } from '@app/constants';
import { INav } from '@app/interfaces';
import { MenuService } from '@app/services';

@Component({
  selector: 'tt-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  menus: Array<INav> = [];
  currentMenu: INav = DEFAULT_NAV;

  constructor(
    private menuSer: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.menus = this.menuSer.menus$.value;

    this.menuSer.currentMenu$.subscribe(resp => {
      this.currentMenu = resp;
    })
  }

  onClickNav(navObj: INav) {
    this.menuSer.setCurrentMenu = navObj;
    this.router.navigate([''], {
      queryParams: {
        view: navObj.queryParams
      },
      queryParamsHandling: 'merge'
    })
  }

}
