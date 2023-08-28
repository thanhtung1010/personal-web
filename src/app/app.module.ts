import { NgModule, TransferState } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, NavBarComponent, PageLayoutComponent, WebLayoutComponent } from './components';
import { MenuService } from './services';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { enviroment } from '@src/enviroments/enviroment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SvgIconPipe } from './pipes/svg-icon.pipe';
import { AngularSvgIconModule, SvgLoader, SvgHttpLoader } from 'angular-svg-icon';

function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// function svgLoaderFactory(http: HttpClient, transferState: TransferState) {
//   return new SvgHttpLoader('browser/assets/svg/icons', transferState);
// }

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    HeaderComponent,
    NavBarComponent,
    WebLayoutComponent,

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
    AngularSvgIconModule.forRoot(
    //   {
    //   loader: {
    //     provide: SvgLoader,
    //     useFactory: svgLoaderFactory,
    //     deps: [ HttpClient, TransferState ],
    //   }
    // }
    ),
  ],
  providers: [
    MenuService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
