import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { enviroment } from '@environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangService } from './services/lang.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VersionService } from './services/version.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { APIService, DeviceIdService, MenuService } from './services';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { NotFoundComponent } from './components';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const fireBaseConfig = enviroment.FIREBASE_CONFIG;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzMessageModule,

    TranslateModule.forRoot(
      {
        defaultLanguage: enviroment.defaultLang,
        loader: {
          provide: TranslateLoader,
          useFactory: HTTPLoaderFactory,
          deps: [HttpClient]
        }
      },
    ),
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
