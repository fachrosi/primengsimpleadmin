import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path      : 'table',
    component : TableComponent
  },
  {
    path      : 'form',
    component : FormComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
