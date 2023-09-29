import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validator } from './validators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AvailableServicesService } from 'src/app/services/available-services.service';
import { CreateAppointmentService } from '../create-appointment.service';
import { Router } from '@angular/router';

interface User {
  username: string;
  email: string;
  pic: number;
  fullName: string;
  age: string;
  adress: string;
  gender: 'male' | 'female';
  service: {
    serviceName: string;
    photo: string;
    id: 0;
  };
  phone: string;
}
@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent implements OnInit {
  err = '';
  userInfo: User = {
    username: '',
    email: '',
    pic: 0,
    fullName: '',
    age: '',
    adress: '',
    gender: 'male',
    service: {
      serviceName: '',
      photo: '',
      id: 0,
    },
    phone: '',
  };
  services: { serviceName: string; photo: string; id: number }[] = [
    { serviceName: '', photo: '', id: 0 },
  ];
  seletedService = {
    photo: '',
    serviceName: '',
    id: 0,
  };
  constructor(
    private Fb: FormBuilder,
    private auth: AuthenticationService,
    private availServices: AvailableServicesService,
    private createAppointment: CreateAppointmentService,
    private router: Router
  ) {
    this.auth
      .getUser()
      .subscribe(
        (value) => (this.userInfo = { ...this.userInfo, ...value.object.user })
      );
  }
  async ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await this.availServices.fetchServices();
    if (data.status === 200) {
      this.services = data.data;
    } else {
      this.err = data.error.error.message;
    }
    this.appointment.valueChanges.subscribe((change) => {
      // Update the errors object whenever the FormGroup changes
      this.seletedService = change.services
        ? change.services
        : { serviceName: '', photo: '', id: 0 };
      this.updateErrors();
    });
    this.appointment.controls.fullName.setValue(this.userInfo.fullName);
  }

  //

  appointment = this.Fb.group({
    fullName: [this.userInfo.fullName],
    gender: [this.userInfo.gender],
    adress: [''],
    age: ['', []],
    services: [this.seletedService],
    phoneNumber: ['', [Validator.phoneNumberValidator]],
  });
  async submit() {
    //

    // send the date to backend to see if the time is available if not the backend the return if the valid : true else it returns three time segment and provide them to user in the same day he choose and tommorow in the same time if availbale if not it looks for after tomowrow and goes on
    this.userInfo = {
      ...this.userInfo,
      age: this.appointment.value.age?.toString() as string,
      adress: this.appointment.value.adress as string,

      service: this.appointment.value.services as {
        serviceName: string;
        photo: string;
        id: 0;
      },
      phone: this.appointment.value.phoneNumber as string,
    };
    console.log(this.userInfo);
    const data = await this.createAppointment.createAppointment(this.userInfo);
    if (data.status === 200) {
      this.router.navigateByUrl('/profile');
    } else {
      this.err = data.message;
    }
  }

  updateErrors() {
    this.errors = {
      adress: this.appointment.controls.adress.errors,
      age: this.appointment.controls.age.errors,
      services: this.appointment.controls.services.errors,
      phoneNumber: this.appointment.controls.phoneNumber.errors,
    };
  }
  errors = {
    adress: this.appointment.controls.adress.errors,
    age: this.appointment.controls.age.errors,
    services: this.appointment.controls.services.errors,
    phoneNumber: this.appointment.controls.phoneNumber.errors,
  };
}
