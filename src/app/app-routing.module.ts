import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login1Component } from './login/login1/login1.component';
import { Login2Component } from './login/login2/login2.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { StaticComponent } from './static/static.component';

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
        component : StaticComponent
      },{
        path      : 'menu',
        component : StaticComponent
      },{
        path      : 'submenu1',
        component : StaticComponent
      },{
        path      : 'submenu2',
        component : StaticComponent
      },{
        path      : 'documentation',
        component : DocumentationComponent
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
