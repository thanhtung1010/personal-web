import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enviroment } from '@environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
    AppRoutingModule,
    NzMessageModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
