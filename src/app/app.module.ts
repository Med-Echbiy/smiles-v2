import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  featherArrowRight,
  featherCheck,
  featherClock,
  featherEye,
  featherEyeOff,
  featherMapPin,
  featherMenu,
  featherPhoneCall,
  featherUser,
} from '@ng-icons/feather-icons';
import { simpleMaildotru } from '@ng-icons/simple-icons';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { SectionOneComponent } from './home/section/section-one/section-one.component';
import { SectionTwoComponent } from './home/section/section-two/section-two.component';
import { CarouselModule } from 'primeng/carousel';
import { SectionThreeComponent } from './home/section/section-three/section-three.component';
import { SectionFourComponent } from './home/section/section-four/section-four.component';
import { SectionFiveComponent } from './home/section/section-five/section-five.component';
import { SectionSixComponent } from './home/section/section-six/section-six.component';
import { AboutPageModule } from './about-page/about-page.module';
import { AppointmentModule } from './appointment/appointment.module';
import { NavigationEnd, Router } from '@angular/router';
import { RedirectComponent } from './RedirectPage/redirect/redirect.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent,
    SidebarComponent,
    HeroSectionComponent,
    HomeComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionSixComponent,
    RedirectComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      featherMenu,
      featherPhoneCall,
      simpleMaildotru,
      featherMapPin,
      featherArrowRight,
      featherCheck,
      featherClock,
      featherUser,
      featherEye,
      featherEyeOff,
    }),
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-smiles.eu.auth0.com',
      clientId: 'GlL42vv9ZZO8kUpcBTLcyA56kAxfMmR6',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    CarouselModule,
    AboutPageModule,
    AppointmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // Check if the route change event is a NavigationEnd event
      if (event instanceof NavigationEnd) {
        // Scroll the page to the top
        window.scrollTo(0, 0);
      }
    });
  }
}
