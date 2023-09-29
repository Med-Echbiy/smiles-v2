import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
const route: Routes = [{ path: '', component: AppointmentFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class appointmentRoutingModule {}
