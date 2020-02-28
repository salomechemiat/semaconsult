import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChvComponent } from './chv.component';
import { SharedModule } from '../shared/shared.module';
import { ChvRoutingModule } from '../chv/chv-routing.module';
import { ChvNavComponent } from './common/chv-nav/chv-nav.component';
import { ScreeningComponent } from './screening/screening.component';

@NgModule({
  declarations: [
    ChvComponent,
    ChvNavComponent,
    ScreeningComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChvRoutingModule
  ]
})
export class ChvModule { }
