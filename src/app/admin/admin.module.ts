import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
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
import { AdminNavComponent } from './component/admin-nav/admin-nav.component';
import { PhonesComponent } from './centers/phones/phones.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    KiosksComponent,
    QuestionsComponent,
    DiseaseComponent,
    HospitalsComponent,
    ViewHospitalsComponent,
    EditHospitalsComponent,
    LocationsComponent,
    UsersComponent,
    AddUserComponent,
    ViewUserComponent,
    DashboardComponent,
    KioskReportComponent,
    AdminNavComponent,
    AdminComponent,
    PhonesComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
