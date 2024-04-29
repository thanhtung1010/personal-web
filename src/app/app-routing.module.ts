import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE } from 'tt-library-angular-porfolio';

const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO_HOME,
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: ROUTE.PORTFOLIO_ABOUT_ME,
    loadComponent: () => import('./components/about-me/about-me.component').then(c => c.AboutMeComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO_HOME,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
