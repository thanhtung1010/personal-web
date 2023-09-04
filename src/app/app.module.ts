import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjustLangComponent, HeaderComponent, NavBarComponent, PageLayoutComponent, WebLayoutComponent } from './components';
import { MenuService } from './services';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SvgIconPipe } from './pipes/svg-icon.pipe';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LangService } from './services/lang.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { enviroment } from '@enviroments/enviroment';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NavLinkPipe } from './pipes/nav-link.pipe';

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
    NavLinkPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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

    NzSelectModule,
  ],
  providers: [
    MenuService,
    Title,
    LangService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
