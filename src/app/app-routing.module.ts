import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { AuthGuard } from "./guards/auth-guard.service";

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'chv',
    loadChildren: './chv/chv.module#ChvModule'
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
