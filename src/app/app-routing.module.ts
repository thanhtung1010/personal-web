import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE } from './constants';
import { managementActiveGuard } from './guards';

const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then((e) => e.PortfolioModule),
  },
  {
    path: ROUTE.MANAGEMENT,
    loadChildren: () => import('./modules/management/management.module').then((e) => e.ManagementModule),
    canActivate: [managementActiveGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
