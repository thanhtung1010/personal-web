import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { enviroment } from '@enviroments/enviroment';
import { AppLoadingHelper } from './helpers';
import { LangService } from './services/lang.service';
import { MenuService } from './services';
import * as _ from 'lodash';

@Component({
  selector: 'tung-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  title: string = "SEO.TITLE";
  linkSVG = `assets/svg/icons.svg?v=${Date.now()}`;
  svgIconLink = `${enviroment.ASSETS_URL}${this.linkSVG}`;

  constructor(
    private titleSer: Title,
    private translateSer: TranslateService,
    private langSer: LangService,
    private menuSer: MenuService,
  ) {}

  ngOnInit(): void {
    this.langSer.init();
    this.menuSer.init();

    this.translateSer.onLangChange.subscribe(resp => {
      this.translateSer.get(this.title).subscribe(resp => {
        this.titleSer.setTitle(resp);
      });
    });

    this.menuSer.currentMenu$.subscribe(resp => {
      const _screenByQueryParams = document.getElementById(resp.queryParams);
      if (_screenByQueryParams) {
        _screenByQueryParams.scrollIntoView();
      }
    });
  }

  ngAfterViewInit(): void {
    AppLoadingHelper.Toggle(false);
  }
}
