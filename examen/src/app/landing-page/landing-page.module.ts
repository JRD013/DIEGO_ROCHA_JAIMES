import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LandingPageComponent } from './landing-page.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    LandingPageComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LandingPageModule { }
