import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

interface UserInfo {
  jwt: string;
  user: {
    username: string;
    email: string;
    pic: number;
    fullName: string;
    gender: 'female' | 'male';
  };
}

interface User {
  userLogged: boolean;
  object: UserInfo;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}
  isInStorage = window.localStorage.getItem('user') ? true : false;
  stateSubject = new BehaviorSubject<User>({
    userLogged: this.isInStorage,
    object: this.isInStorage
      ? JSON.parse(window.localStorage.getItem('user') as string)
      : { user: { username: '', email: '', pic: 0 }, jwt: '' },
  });
  state$ = this.stateSubject.asObservable();
  setState(newState: User) {
    this.stateSubject.next(newState);
  }

  async signIn({ email, password }: { email: string; password: string }) {
    let valid = false;
    try {
      const data$ = this.http.post<UserInfo>(
        'https://dentist-strapi.onrender.com/api/auth/local',
        {
          identifier: email,
          password: password,
        }
      );
      const data = await lastValueFrom<UserInfo>(data$);
      window.localStorage.setItem('user', JSON.stringify(data));
      this.setState({ userLogged: true, object: data });
      valid = true;
    } catch (error) {
      console.log(error);
    }

    return valid;
  }
  getUser() {
    return this.state$;
  }
  getUserLogged() {
    return this.state$;
  }
  async register({
    username,
    email,
    password,
    fullName,
    pic = 0,
    gender,
  }: {
    username: string;
    email: string;
    password: string;
    fullName: string;
    pic: number;
    gender: 'male' | 'female';
  }) {
    try {
      const req = this.http.post<UserInfo>(
        'https://dentist-strapi.onrender.com/api/auth/local/register?populate=*',
        {
          username,
          password,
          email,
          fullName,
          pic: +pic,
          gender,
        }
      );

      const res = await lastValueFrom(req);
      if (res.jwt) {
        window.localStorage.setItem('user', JSON.stringify(res));
        this.setState({ userLogged: true, object: res });
        console.log(res);
        this.router.navigateByUrl('/');
      }
      return 200;
    } catch (error) {
      return error as { error: { error: { message: string } } };
    }
  }
  logOut() {
    this.setState({
      userLogged: false,
      object: {
        jwt: '',
        user: { email: '', username: '', fullName: '', pic: 0, gender: 'male' },
      },
    });
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
