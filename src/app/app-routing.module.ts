import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE } from './constants';
import { managementActiveGuard } from './guards';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO,
  },
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then((e) => e.PortfolioModule),
  },
  {
    path: ROUTE.MANAGEMENT,
    loadChildren: () => import('./modules/management/management.component').then((e) => e.ManagementComponent),
    canActivate: [managementActiveGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
