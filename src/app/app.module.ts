import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enviroment } from '@environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { HttpLogInterceptor } from './_interceptors/http.interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components';
import { FirebaseModule } from './modules/firebase/firebase.module';
import {
  APIService,
  DeviceIdService,
  LangService,
  LazyLoadScriptService,
  MenuService,
  VersionService,
} from './services';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const fireBaseConfig = enviroment.FIREBASE_CONFIG;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzMessageModule,

    TranslateModule.forRoot({
      defaultLanguage: enviroment.defaultLang,
      loader: {
        provide: TranslateLoader,
        useFactory: HTTPLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AngularSvgIconModule.forRoot(),
    FirebaseModule.forRoot(fireBaseConfig),
    NotFoundComponent,
  ],
  providers: [
    Title,
    LangService,
    VersionService,
    MenuService,
    DeviceIdService,
    APIService,
    LazyLoadScriptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLogInterceptor,
      multi: true,
    },
    provideHttpClient(),
    importProvidersFrom([])
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
