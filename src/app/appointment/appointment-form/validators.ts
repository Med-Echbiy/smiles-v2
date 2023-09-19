import { AbstractControl } from '@angular/forms';

export class Validator {
  static nameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const name = control.value as string;
    // console.log(name);
    if (name.trim().length < 3) {
      return { nameInvalid: true };
    }
    return null;
  }
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
        name: 'service-name',
        image: 'assets/service_1.webp',
      },
    ];
    const service = control.value;

    let doesIncludes = false;
    for (let serviceIn of services) {
      if (
        service.name === serviceIn.name &&
        service.image === serviceIn.image
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
    let day = date.getDay();
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
