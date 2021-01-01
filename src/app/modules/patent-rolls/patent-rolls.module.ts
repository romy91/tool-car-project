import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatentRollsRoutingModule } from './patent-rolls-routing.module';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { PatentRollsCalcComponent } from './patent-rolls-calc/patent-rolls-calc.component';
import { RouterModule } from '@angular/router';
import { routes } from './patent-rolls-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NavBarComponent, PatentRollsCalcComponent, DashboardComponent],
  imports: [
    CommonModule,
    PatentRollsRoutingModule,
    MaterialModule,
    RouterModule.forChild(routes),
    MatMenuModule,
    FlexLayoutModule
  ]
})
export class PatentRollsModule {}
