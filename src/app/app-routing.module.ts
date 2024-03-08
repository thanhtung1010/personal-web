import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { ROUTE } from './constants';
import { managementActiveGuard } from './guards';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpLogInterceptor } from './_interceptors/http.interceptors';
import { LangService, VersionService, MenuService, DeviceIdService, APIService, LazyLoadScriptService } from './services';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { enviroment } from '@environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: ROUTE.NOT_FOUND,
    loadComponent: () => import('./components/not-found/not-found.component').then((e) => e.NotFoundComponent),
  },
  {
    path: ROUTE.MANAGEMENT,
    loadChildren: () => import('./modules/management/management.module').then((e) => e.ManagementModule),
    canActivate: [managementActiveGuard]
  },
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then((e) => e.PortfolioModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO,
  },
];

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const fireBaseConfig = enviroment.FIREBASE_CONFIG;

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      LazyLoadScriptService,
      Title,
      LangService,
      VersionService,
      MenuService,
      DeviceIdService,
      APIService,
      FirebaseModule.forRoot(fireBaseConfig),

      BrowserAnimationsModule,
      TranslateModule.forRoot({
        defaultLanguage: enviroment.defaultLang,
        loader: {
          provide: TranslateLoader,
          useFactory: HTTPLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    provideHttpClient(
      withInterceptors([HttpLogInterceptor]),
    ),
  ]
};
