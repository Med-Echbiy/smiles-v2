import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { NgIconsModule } from '@ng-icons/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
@NgModule({
  declarations: [AppointmentFormComponent, AppointmentModalComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    NgIconsModule.withIcons({}),
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
  ],
})
export class AppointmentModule {}
