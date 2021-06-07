import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const routes: Routes = [
  {
    path:'CIPEC',
    component: Comp1Component
  },
  {
    path: 'INICIO',
    component: Comp2Component
  },
  {
    path: 'QUIENES SOMOS',
    component: Comp3Component
  },
  {
    path: 'DIRECCION',
    component: Comp4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
