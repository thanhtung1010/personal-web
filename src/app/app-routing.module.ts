import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE } from 'tt-library-angular-porfolio';

const routes: Routes = [
  {
    path: ROUTE.NOT_FOUND,
    loadComponent: () => import('./components/not-found/not-found.component').then((e) => e.NotFoundComponent),
  },
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then((e) => e.PortfolioModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
