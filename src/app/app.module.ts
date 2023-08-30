import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjustLangComponent, HeaderComponent, NavBarComponent, PageLayoutComponent, WebLayoutComponent } from './components';
import { MenuService } from './services';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { enviroment } from '@src/enviroments/enviroment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SvgIconPipe } from './pipes/svg-icon.pipe';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LangService } from './services/lang.service';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    HeaderComponent,
    NavBarComponent,
    WebLayoutComponent,
    AdjustLangComponent,

    SvgIconPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

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
    MenuService,
    Title,
    LangService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
