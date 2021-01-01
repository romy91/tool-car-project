import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { DashboardComponent } from './modules/patent-rolls/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'tool-car',
    component: DashboardComponent
  },
  {
    path: 'tool-car',
    component: NavBarComponent,
    children: [
      {
        path: 'patent-rolls-calc',
        loadChildren: () =>
          import('./modules/patent-rolls/patent-rolls.module').then(
            m => m.PatentRollsModule
          )
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tool-car',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tool-car'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
