import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChvComponent } from './chv.component';
import { ScreeningComponent } from './screening/screening.component';

const routes: Routes = [
  {
    path: '',
    component: ChvComponent,
    children: [
      {
        path: '',
        component: ScreeningComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChvRoutingModule { }
