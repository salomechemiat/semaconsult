import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../core/guards/admin.guard';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { KiosksComponent } from './kiosk/kiosks/kiosks.component';
import { QuestionsComponent } from './kiosk/questions/questions.component';
import { DiseaseComponent } from './kiosk/disease/disease.component';
import { HospitalsComponent } from './hospitals/hospitals/hospitals.component';
import { ViewHospitalsComponent } from './hospitals/view-hospitals/view-hospitals.component';
import { EditHospitalsComponent } from './hospitals/edit-hospitals/edit-hospitals.component';
import { LocationsComponent } from './centers/locations/locations.component';
import { UsersComponent } from './users/users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { DashboardComponent } from './reports/dashboard/dashboard.component';
import { KioskReportComponent } from './reports/kiosk/kiosk.component';
import { PhonesComponent } from './centers/phones/phones.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AdminGuard],
    children: [
      {
        path: 'kiosk',
        children: [
          {
            path: 'questions',
            component: QuestionsComponent
          },
          {
            path: 'diseases',
            component: DiseaseComponent
          },
          {
            path: '',
            component: KiosksComponent
          }
        ]
      },
      {
        path: 'hospitals',
        children: [
          {
            path: ':id/view',
            component: ViewHospitalsComponent
          },
          {
            path: ':id/edit',
            component: EditHospitalsComponent
          },
          {
            path: '',
            component: HospitalsComponent
          }
        ]
      },
      {
        path: 'centers',
        children: [
          {
            path: 'communication',
            component: PhonesComponent
          },
          {
            path: '',
            component: LocationsComponent
          }
        ]
      },
      {
        path: 'reports',
        children: [
          {
            path: 'kiosks',
            component: KioskReportComponent
          },
          {
            path: '',
            component: DashboardComponent
          }
        ]
      },
      {
        path: 'settings'
      },
      {
        path: 'users',
        children: [
          {
            path: 'add',
            component: AddUserComponent
          },
          {
            path: ':id/view',
            component: ViewUserComponent
          },
          {
            path: '',
            component: UsersComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: '/admin/reports',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
