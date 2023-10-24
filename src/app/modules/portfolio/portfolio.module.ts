import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import {
  AboutMeComponent,
  AdjustLangComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  PageLayoutComponent,
} from '@app/modules/portfolio/components';
import { NavLinkPipe } from '@app/pipes/nav-link.pipe';
import { SvgIconPipe } from '@app/pipes/svg-icon.pipe';
import { MenuService } from '@app/services';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PortfolioComponent } from './portfolio.component';
import { ROUTE } from '@app/constants';
import { LinkButtonLayoutComponent } from '@app/components';

const routes: Route[] = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ROUTE.PORTFOLIO_HOME
      },
      {
        path: ROUTE.PORTFOLIO_HOME,
        component: HomeComponent
      },
      {
        path: ROUTE.PORTFOLIO_ABOUT_ME,
        component: AboutMeComponent
      },
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

    LinkButtonLayoutComponent,
  ],
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    AdjustLangComponent,
    HomeComponent,
    AboutMeComponent,
    FooterComponent,
    PageLayoutComponent,

    SvgIconPipe,
    NavLinkPipe,
  ],
  providers: [
    MenuService,
  ]
})
export class PortfolioModule { }
