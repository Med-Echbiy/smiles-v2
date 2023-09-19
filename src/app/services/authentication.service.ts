import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}
  isInStorage = window.localStorage.getItem('user') ? true : false;
  stateSubject = new BehaviorSubject<{
    userLogged: boolean;
    object: { jwt: string; user: { username: string; email: string } };
  }>({
    userLogged: this.isInStorage,
    object: this.isInStorage
      ? JSON.parse(window.localStorage.getItem('user') as string)
      : { user: { username: '', email: '' }, jwt: '' },
  });
  state$ = this.stateSubject.asObservable();
  setState(newState: any) {
    this.stateSubject.next(newState);
  }

  async signIn({ email, password }: { email: string; password: string }) {
    console.log('1_we run');
    let valid = false;
    try {
      const data$ = this.http.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      });
      const data = await lastValueFrom(data$);
      window.localStorage.setItem('user', JSON.stringify(data));
      this.setState({ userLogged: true, object: data });
      valid = true;
      console.log(data, '2_run_data completed');
    } catch (error) {
      console.log(error);
      console.log('err', '2_run_data completed');
    }
    console.log('3_we are returning');
    return valid;
  }
  getUser() {
    return this.state$;
  }
  getUserLogged() {
    return this.state$;
  }
  register({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) {
    this.http
      .post('http://localhost:1337/api/auth/local/register', {
        username,
        password,
        email,
      })
      .subscribe({
        next: (data) => {
          window.localStorage.setItem('user', JSON.stringify(data));
          this.setState({ userLogged: true, object: data });
          console.log(data);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
  logOut() {
    this.setState({
      userLogged: false,
      object: { jwt: '', user: { email: '', username: '' } },
    });
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
