import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validate } from './validate';
import { Validator } from '../appointment/appointment-form/validators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private Fb: FormBuilder, private auth: AuthenticationService) {}
  registerForm = this.Fb.group(
    {
      username: ['', [Validator.spaceValidator, Validator.nameValidator]],
      email: ['', [Validate.emailValidator]],
      password: [''],
      confirmPassword: ['', []],
    },
    {
      validators: Validate.passwordMatch,
    }
  );
  typePass: 'password' | 'text' = 'password';
  changeType() {
    this.typePass = this.typePass !== 'password' ? 'password' : 'text';
  }
  typePassTwo: 'password' | 'text' = 'password';
  changeTypeTwo() {
    this.typePassTwo = this.typePassTwo !== 'password' ? 'password' : 'text';
  }
  submit() {
    console.log(this.registerForm);
    const data = this.registerForm.value as {
      username: string;
      email: string;
      password: string;
    };
    this.auth.register(data);
    this.registerForm.reset();
  }
}
