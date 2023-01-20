import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path      : '',
    component : LayoutComponent,
    children  : [
      {
        path      : '',
        component : DashboardComponent
      },{
        path      : 'dasboard',
        component : DashboardComponent
      },{
        path      : 'component',
        loadChildren  : () => import('./components/components.module').then(m => m.ComponentsModule)
      },{
        path      : 'setting',
        component : DashboardComponent
      },{
        path      : 'menu',
        component : DashboardComponent
      },{
        path      : 'submenu1',
        component : DashboardComponent
      },{
        path      : 'submenu2',
        component : DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
