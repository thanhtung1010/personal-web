import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import {
  LinkButtonLayoutComponent,
  LogoComponent,
} from '@app/components';
import { EmptyComponent, ROUTE } from 'tt-library-angular-porfolio';
import {
  AboutMeComponent,
  AdjustLangComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  PageLayoutComponent,
} from '@app/modules/portfolio/components';
import { AssetsLink } from '@app/pipes/assets-link.pipe';
import { SvgIconPipe } from '@app/pipes/svg-icon.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MenuComponent } from './components/menu/menu.component';
import { VersionComponent } from './components/version/version.component';
import { HiddenOnSrollDirective } from './directives/hidden-on-scroll.directive';
import { PortfolioComponent } from './portfolio.component';
// import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { FromToDatePipe } from './pipes';
import { AppearOnViewDirective } from './directives';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { SharedModule } from 'tt-library-angular-porfolio';

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
    FormsModule,
    NgOptimizedImage,
    SharedModule,

    TranslateModule,
    RouterModule.forChild(routes),

    NzSelectModule,
    // NzTableModule,
    NzCollapseModule,
    // NzEmptyModule,

    LinkButtonLayoutComponent,
    LogoComponent,
    AssetsLink,
    SvgIconPipe,
    EmptyComponent,
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

    FromToDatePipe,

    HiddenOnSrollDirective,
    AppearOnViewDirective,
  ],
  providers: []
})
export class PortfolioModule { }
