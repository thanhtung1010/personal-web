import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppConfigService, AppLoadingHelper } from 'tt-library-angular-porfolio';

@Component({
  selector: 'tt-root-portfolio',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  title: string = "SEO.TITLE";
  linkSVG = `assets/svg/icons.svg?v=${Date.now()}`;
  svgIconLink = `${this.appConfig.appConfig.remoteModuleUrl.angularPortfolio || ''}${this.linkSVG}`;

  constructor(
    private appConfig: AppConfigService,
  ) {}

  ngOnInit(): void {
    this.initService();
  }

  initService() {
    // this.firebaseSer.init();
  }

  ngAfterViewInit(): void {
    const timeout = setTimeout(() => {
      AppLoadingHelper.Toggle(false);
      clearTimeout(timeout);
    }, 2000);
  }
}
