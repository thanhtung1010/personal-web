import { NgModule } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enviroment } from '@environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components';
import { FirebaseModule } from './modules/firebase/firebase.module';
import {
  DeviceIdService,
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
    VersionService,
    MenuService,
    DeviceIdService,
    LazyLoadScriptService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
