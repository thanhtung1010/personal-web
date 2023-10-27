import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { LinkButtonLayoutComponent, LogoComponent } from '@app/components';
import { ROUTE } from '@app/constants';
import {
  AboutMeComponent,
  AdjustLangComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  PageLayoutComponent,
} from '@app/modules/portfolio/components';
import { AssetsLink } from '@app/pipes/assets-link.pipe';
import { NavLinkPipe } from '@app/pipes/nav-link.pipe';
import { SvgIconPipe } from '@app/pipes/svg-icon.pipe';
import { MenuService } from '@app/services';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MenuComponent } from './components/menu/menu.component';
import { VersionComponent } from './components/version/version.component';
import { PortfolioComponent } from './portfolio.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { HiddenOnSrollDirective } from './directives/hidden-on-scroll.directive';

const routes: Route[] = [
  {
    path: ROUTE.PORTFOLIO_HOME,
    component: HomeComponent
  },
  {
    path: ROUTE.PORTFOLIO_ABOUT_ME,
    component: AboutMeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO_HOME
  },
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
    LogoComponent,
    AssetsLink,
  ],
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    AdjustLangComponent,
    HomeComponent,
    AboutMeComponent,
    FooterComponent,
    PageLayoutComponent,
    MenuComponent,
    VersionComponent,

    SvgIconPipe,
    NavLinkPipe,

    HiddenOnSrollDirective,
  ],
  providers: [
    MenuService,
  ]
})
export class PortfolioModule { }
