import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageModule } from './landing-page.module';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    {
      path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
         redirectTo: 'home'
       },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
     
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
      // {
      // path: '**',
      //   redirectTo: 'error'
      // },
      // {
      //   path: 'error',
      //   component: ErrorComponent
      // } 
    
    ]
      
    }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
