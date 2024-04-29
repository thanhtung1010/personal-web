import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  HttpClient,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {
  AssetsLink,
  EmptyComponent,
  LazyLoadScriptService,
  LinkButtonLayoutComponent,
  LogoComponent,
  SharedModule,
} from 'tt-library-angular-porfolio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AboutMeComponent,
  AdjustLangComponent,
  HomeComponent
} from './components';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AdjustLangComponent,
  ],
  imports: [
    AppRoutingModule,
    NzMessageModule,
    SharedModule,

    CommonModule,
    FormsModule,
    NgOptimizedImage,
    TranslateModule,

    SharedModule,
    NzSelectModule,
    // NzTableModule,
    NzCollapseModule,
    // NzEmptyModule,

    AboutMeComponent,
    HomeComponent,
    LinkButtonLayoutComponent,
    LogoComponent,
    EmptyComponent,
    AssetsLink,
  ],
  providers: [
    LazyLoadScriptService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
