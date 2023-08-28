import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppLoadingHelper } from './helpers/app-loading.helper';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { enviroment } from '@src/enviroments/enviroment';

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
    private translateSer: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateSer.get(this.title).subscribe(resp => {
      this.titleSer.setTitle(resp);
    });
  }

  ngAfterViewInit(): void {
    AppLoadingHelper.Toggle(false);
  }
}
