import { AbstractControl, FormGroup } from '@angular/forms';

export class Validate {
  constructor() {}

  static passwordMatch(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const values = control.value;
    // console.log(values.password, values.confirmPassword);

    if (values.password !== values.confirmPassword) {
      return { invalidMatch: true };
    }

    return null;
  }
  static emailValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const value = control.value as string;
    // console.log(values);
    const regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (!regex.test(value)) {
      return { invalidMatch: true };
    }

    return null;
  }
}
