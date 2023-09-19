import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServiceComponent } from './service-page/our-service/our_service.component';
import { ServicePageModule } from './service-page/service-page.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { AboutComponent } from './about-page/about/about.component';
import { AppointmentFormComponent } from './appointment/appointment-form/appointment-form.component';
import { RedirectComponent } from './RedirectPage/redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
import {
  authenticationGuard,
  notAuthenticationGuard,
} from './authentication.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./service-page/service-page.module').then(
        (m) => m.ServicePageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'appointment',
    component: AppointmentFormComponent,
    // canActivate: [notAuthenticationGuard],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'signIn',
    component: LoginComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile-routing.module').then(
        (m) => m.ProfileRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
