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
  ifError = '';
  gender = [{ name: 'male' }, { name: 'female' }];
  profilePics = [
    { name: 0, id: 'assets/profile/0.jpeg' },
    { id: 'assets/profile/1.jpeg', name: 1 },
    { name: 2, id: 'assets/profile/2.jpeg' },
    { name: 3, id: 'assets/profile/3.jpeg' },
    { name: 4, id: 'assets/profile/4.jpeg' },
    { name: 5, id: 'assets/profile/5.jpeg' },
  ];
  selectedPic = this.profilePics[0];
  modal = false;
  constructor(private Fb: FormBuilder, private auth: AuthenticationService) {}
  changePic(i: number) {
    this.selectedPic = this.profilePics[i];
    this.registerForm.controls.pic.setValue(this.profilePics[i]);
    this.openModal();
  }
  openModal() {
    this.modal = !this.modal;
  }
  registerForm = this.Fb.group(
    {
      pic: [this.selectedPic],
      fullName: ['', [Validator.nameValidator]],
      gender: [{ name: 'male' }],
      username: ['', [Validator.usernameValidator]],
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
  async submit() {
    console.log(this.selectedPic, this.registerForm.controls);
    const data = {
      ...this.registerForm.value,
      gender: this.registerForm.controls.gender.value?.name,
      pic: this.registerForm.controls.pic.value?.name,
    } as {
      username: string;
      email: string;
      password: string;
      pic: number;
      fullName: string;
      gender: 'male' | 'female';
    };
    const res: { error: { error: { message: string } } } | 200 =
      await this.auth.register(data);
    console.log(res);
    if (res === 200) {
      this.registerForm.reset();
    } else {
      this.ifError = res.error.error.message as string;
      this.registerForm.controls.email.reset();
    }
  }
}
