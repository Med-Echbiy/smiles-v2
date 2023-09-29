import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AccordionModule } from 'primeng/accordion';
import {
  featherBookmark,
  featherCheck,
  featherUser,
  featherUserCheck,
  featherUserX,
  featherX,
} from '@ng-icons/feather-icons';
import { NgIconsModule } from '@ng-icons/core';
import { simpleGmail } from '@ng-icons/simple-icons';

@NgModule({
  declarations: [UserProfileComponent, NavbarComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AccordionModule,
    NgIconsModule.withIcons({
      featherBookmark,
      featherUserX,
      featherUserCheck,
      featherX,
      featherUser,
      simpleGmail,
      featherCheck,
    }),
  ],
})
export class ProfileModule {}
