
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ROUTE } from '@app/constants';
import { ManagementComponent } from './management.component';

const routes: Route[] = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: ROUTE.OUTSIDE_MANAGEMENT,
        loadChildren: () => import('./modules/outside/outside.module').then((e) => e.OutsideModule),
      },
      {
        path: ROUTE.INSIDE_MANAGEMENT,
        loadChildren: () => import('./modules/inside/inside.module').then((e) => e.InsideModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ROUTE.OUTSIDE_MANAGEMENT,
      },
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ManagementComponent,
  ]
})
export class ManagementModule { }
