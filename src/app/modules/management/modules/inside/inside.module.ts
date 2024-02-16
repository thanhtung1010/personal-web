import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideComponent } from './inside.component';
import { Route, Router, RouterModule } from '@angular/router';

const _routes: Route[] = [
  {
    path: '',
    component: InsideComponent,
    children: [],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(_routes),
  ],
  declarations: [InsideComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class InsideModule { }
