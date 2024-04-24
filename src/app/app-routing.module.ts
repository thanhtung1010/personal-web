import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent, ROUTE } from 'tt-library-angular-porfolio';

const routes: Routes = [
  {
    path: ROUTE.NOT_FOUND,
    loadComponent: () => NotFoundComponent,
  },
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then((e) => e.PortfolioModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.NOT_FOUND,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
