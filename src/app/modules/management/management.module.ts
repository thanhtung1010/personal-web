import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { Route, RouterModule } from '@angular/router';
import { ROUTE } from '@app/constants';
import { LoginComponent } from './components/login/login.component';
import { AssetsLink } from '@app/pipes/assets-link.pipe';

const routes: Route[] = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: ROUTE.MANAGEMENT_AUTH,
        component: LoginComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ROUTE.MANAGEMENT_AUTH,
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    AssetsLink,
  ],
  declarations: [
    ManagementComponent,
    LoginComponent,
  ]
})
export class ManagementModule { }
