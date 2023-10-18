import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdjustLangComponent, HeaderComponent, NavBarComponent, PageLayoutComponent, WebLayoutComponent } from '@app/modules/portfolio/components';
import { AboutMeComponent } from '@app/modules/portfolio/components/about-me/about-me.component';
import { NavLinkPipe } from '@app/pipes/nav-link.pipe';
import { SvgIconPipe } from '@app/pipes/svg-icon.pipe';
import { MenuService } from '@app/services';
import { LangService } from '@app/services/lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PortfolioComponent } from './portfolio.component';
import { Route, RouterModule } from '@angular/router';
import { ROUTE } from '@app/constants';

const routes: Route[] = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      // {
      //   path: '**',
      //   pathMatch: 'full',
      //   redirectTo: ROUTE.PORTFOLIO_HOME
      // }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,

    TranslateModule,
    AngularSvgIconModule,
    RouterModule.forChild(routes),

    NzSelectModule,
  ],
  declarations: [
    PortfolioComponent,
    PageLayoutComponent,
    HeaderComponent,
    NavBarComponent,
    WebLayoutComponent,
    AdjustLangComponent,
    AboutMeComponent,

    SvgIconPipe,
    NavLinkPipe,
  ],
  providers: [
    MenuService,
  ]
})
export class PortfolioModule { }
