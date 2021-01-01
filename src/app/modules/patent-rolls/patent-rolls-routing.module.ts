import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatentRollsCalcComponent } from './patent-rolls-calc/patent-rolls-calc.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tool-car',
    pathMatch: 'full',
    data: {}
  },
  {
    path: 'calc',
    component: PatentRollsCalcComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentRollsRoutingModule {}
