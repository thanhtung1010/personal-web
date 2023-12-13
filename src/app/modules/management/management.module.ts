import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { Route, RouterModule } from '@angular/router';
import { ROUTE } from '@app/constants';
import { LoginComponent } from './components/login/login.component';
import { AssetsLink } from '@app/pipes/assets-link.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

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
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,

    NzInputModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,

    AssetsLink,
  ],
  declarations: [
    ManagementComponent,
    LoginComponent,
  ]
})
export class ManagementModule { }
