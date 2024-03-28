import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { enviroment } from '@environments/environment';
import { AppLoadingHelper } from './helpers';
import { DeviceIdService, MenuService } from './services';
import * as _ from 'lodash';
import { VersionService } from './services/version.service';
import { FirebaseService } from './modules/firebase/firebase.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tt-root-portfolio',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  title: string = "SEO.TITLE";
  linkSVG = `assets/svg/icons.svg?v=${Date.now()}`;
  svgIconLink = `${enviroment.ASSETS_URL}${this.linkSVG}`;

  constructor(
    private menuSer: MenuService,
    private versionSer: VersionService,
    // private firebaseSer: FirebaseService,
    // private deviceIdSer: DeviceIdService,
  ) {}

  ngOnInit(): void {
    this.initService();
  }

  initService() {
    this.menuSer.init();
    this.versionSer.init();
    // this.firebaseSer.init();
    // this.deviceIdSer.init();
  }

  ngAfterViewInit(): void {
    const timeout = setTimeout(() => {
      AppLoadingHelper.Toggle(false);
      clearTimeout(timeout);
    }, 2000);
  }
}
