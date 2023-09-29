import { AbstractControl } from '@angular/forms';

export class Validator {
  static nameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const name = control.value as string;
    // console.log(name);

    if (name.trim().length < 4) {
      return { nameIsShort: true };
    } else if (!name.includes(' ')) {
      return { lastNameIsRequired: true };
    } else if (name.match(/[\d]/)) {
      return { numberAreNotAllowed: true };
    } else if (name.slice(name.indexOf(' ') + 1).length < 4) {
      return { lastNameIsTooShort: true };
    } else if (name.match(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g)) {
      return { nameHasSymbol: true };
    }
    return null;
  }
  //
  static usernameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const name = control.value as string;
    // console.log(name);

    if (name.trim().length < 5) {
      return { nameInvalid: true };
    } else if (name.includes(' ')) {
      return { space: true };
    }
    return null;
  }
  //
  static spaceValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const name = control.value as string;
    // console.log(name);
    const regexPattern = /[\W\d]/;
    if (regexPattern.test(name)) {
      return { spaceInName: true };
    }
    return null;
  }
  static phoneNumberValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const number = control.value as string;
    // console.log(number, 'num');
    const regex1 = /^(07|06)\d{8}$/;
    const regex2 = /^(2126|2127)\d{8}$/;
    // console.log(regex1.test(number), 'wtf');
    if (regex1.test(number)) {
      return null;
    } else if (regex2.test(number)) {
      return null;
    }
    return { invalidPhoneNum: true };
  }

  static servicesValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const services = [
      {
        serviceName: 'service-name',
        photo: 'assets/service_1.webp',
      },
    ];
    const service = control.value;

    let doesIncludes = false;
    for (const serviceIn of services) {
      if (
        service.serviceName === serviceIn.serviceName &&
        service.photo === serviceIn.photo
      ) {
        doesIncludes = true;
        break;
      }
    }
    // console.log(doesIncludes);
    if (doesIncludes) {
      return null;
    }

    return { serviceInvalid: true };
  }
  static dateTimeValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const date = new Date(control.value);
    const day = date.getDay();
    console.log(`${date.toLocaleDateString()}/${date.getHours()}`);
    const days = [
      'monday',
      'tuesday',
      'wednseday',
      'thurseday',
      'friday',
      'saturday',
      'sunday',
    ];

    //
    if (days[day - 1] === (days[5] || days[6])) {
      return { BreakDay: true };
    }
    //
    if (!(days[day - 1] === (days[5] || days[6]))) {
      return null;
    }

    // if()

    return { dayInvalid: true };
  }
}
