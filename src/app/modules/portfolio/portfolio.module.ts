import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AdjustLangComponent, HeaderComponent } from '@app/modules/portfolio/components';
import { NavLinkPipe } from '@app/pipes/nav-link.pipe';
import { SvgIconPipe } from '@app/pipes/svg-icon.pipe';
import { MenuService } from '@app/services';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PortfolioComponent } from './portfolio.component';

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
    HeaderComponent,
    AdjustLangComponent,

    SvgIconPipe,
    NavLinkPipe,
  ],
  providers: [
    MenuService,
  ]
})
export class PortfolioModule { }
