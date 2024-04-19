import { NgModule } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from "tt-library-angular-porfolio";
import { FirebaseModule } from './modules/firebase/firebase.module';
import {
  SharedModule,
  LazyLoadScriptService,
} from 'tt-library-angular-porfolio';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    NzMessageModule,
    FirebaseModule.forRoot(),
    SharedModule,
    NotFoundComponent,
  ],
  providers: [
    LazyLoadScriptService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
