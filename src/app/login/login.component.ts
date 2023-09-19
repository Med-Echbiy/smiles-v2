import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder } from '@angular/forms';
import { Validate } from '../register/validate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private auth: AuthenticationService,
    private Fb: FormBuilder,
    private router: Router
  ) {}
  loginForm = this.Fb.group({
    email: ['', [Validate.emailValidator]],
    password: [''],
  });
  showPass = false;
  toggleShowPass() {
    this.showPass = !this.showPass;
  }
  async singIn() {
    let valid = await this.auth.signIn(
      this.loginForm.value as { email: string; password: string }
    );
    if (valid) {
      this.loginForm.reset();
      this.router.navigateByUrl('/appointment');
    } else {
      this.loginForm.controls.password.setValue('');
      this.loginForm.controls.password.setErrors({ loginInvalid: true });
    }
  }
}
