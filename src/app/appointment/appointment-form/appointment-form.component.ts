import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validator } from './validators';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent implements OnInit {
  services: { name: string; image: string }[] = [
    {
      name: 'service-name',
      image: 'assets/service_1.webp',
    },
  ];
  seletedService = {
    image: '',
    name: '',
  };
  //
  userInfo = {
    fullName: '',
    age: '',
    adress: '',
    service: {
      image: '',
      name: '',
    },
    phone: '',
  };
  isOpen = false;
  constructor(private Fb: FormBuilder) {}

  appointment = this.Fb.group({
    firstName: ['', [Validator.nameValidator, Validator.spaceValidator]],
    lastName: ['', [Validator.nameValidator, Validator.spaceValidator]],
    adress: ['', [Validator.nameValidator]],
    age: ['', []],
    services: [{ name: '', image: '' }, Validator.servicesValidator],
    phoneNumber: ['', [Validator.phoneNumberValidator]],
  });
  submit() {
    const days = [
      'monday',
      'tuesday',
      'wednseday',
      'thurseday',
      'friday',
      'saturday',
      'sunday',
    ];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    //

    // send the date to backend to see if the time is available if not the backend the return if the valid : true else it returns three time segment and provide them to user in the same day he choose and tommorow in the same time if availbale if not it looks for after tomowrow and goes on
    this.userInfo = {
      fullName: `${this.appointment.value.firstName} ${this.appointment.value.lastName}`,
      age: this.appointment.value.age?.toString() as string,
      adress: this.appointment.value.adress as string,

      service: this.appointment.value.services as {
        name: string;
        image: string;
      },
      phone: this.appointment.value.phoneNumber as string,
    };
    console.log(this.userInfo);
    this.isOpen = true;
  }
  toggleIsOpen() {
    console.log('fofofo', this.isOpen);
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {
    this.appointment.valueChanges.subscribe((change) => {
      // Update the errors object whenever the FormGroup changes
      this.seletedService = change.services
        ? change.services
        : { name: '', image: '' };
      this.updateErrors();
    });
  }

  updateErrors() {
    this.errors = {
      firstName: this.appointment.controls.firstName.errors,
      lastName: this.appointment.controls.lastName.errors,
      adress: this.appointment.controls.adress.errors,
      age: this.appointment.controls.age.errors,

      services: this.appointment.controls.services.errors,
      phoneNumber: this.appointment.controls.phoneNumber.errors,
    };
  }
  errors = {
    firstName: this.appointment.controls.firstName.errors,
    lastName: this.appointment.controls.lastName.errors,
    adress: this.appointment.controls.adress.errors,
    age: this.appointment.controls.age.errors,
    services: this.appointment.controls.services.errors,
    phoneNumber: this.appointment.controls.phoneNumber.errors,
  };
}
