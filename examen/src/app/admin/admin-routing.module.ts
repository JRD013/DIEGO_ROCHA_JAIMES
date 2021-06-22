import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
  //component: AdminComponent
   redirectTo: 'table'
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
