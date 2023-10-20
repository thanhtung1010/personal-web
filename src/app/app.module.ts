import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { enviroment } from '@enviroments/enviroment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangService } from './services/lang.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkButtonLayoutComponent } from './components';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LinkButtonLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

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
  ],
  providers: [
    Title,
    LangService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
