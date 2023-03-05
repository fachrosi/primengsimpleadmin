import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login1Component } from './login/login1/login1.component';
import { Login2Component } from './login/login2/login2.component';

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
  },{
    path      : 'login',
    component : Login1Component
  },{
    path      : 'login2',
    component : Login2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
