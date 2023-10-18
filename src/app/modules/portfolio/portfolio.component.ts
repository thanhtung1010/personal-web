import { Component, OnInit } from '@angular/core';
import { MenuService } from '@app/services';

@Component({
  selector: 'tt-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  constructor(
    private menuSer: MenuService,
  ) { }

  ngOnInit() {
    this.menuSer.init();

    this.menuSer.currentMenu$.subscribe(resp => {
      const _screenByQueryParams = document.getElementById(resp.queryParams);
      if (_screenByQueryParams) {
        _screenByQueryParams.scrollIntoView();
      }
    });
  }

}
