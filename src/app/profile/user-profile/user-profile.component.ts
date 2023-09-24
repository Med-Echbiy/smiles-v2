import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface Data {
  appointments: {}[];

  email: string;
  id: number;
  pic: number;

  username: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user = window.localStorage.getItem('user');
  profilePics = [
    'assets/profile/0.jpeg',
    'assets/profile/1.jpeg',
    'assets/profile/2.jpeg',
    'assets/profile/3.jpeg',
    'assets/profile/4.jpeg',
    'assets/profile/5.jpeg',
  ];
  modal = false;
  token = this.user && JSON.parse(this.user);
  constructor(private http: HttpClient) {}
  data: Data = {
    appointments: [],
    email: '',
    id: 0,
    pic: 0,
    username: '',
  };
  choosenPic: number = 0;
  async ngOnInit(): Promise<void> {
    const userData = this.http.get<Data>(
      `http://localhost:1337/api/users/${this.token.user.id}?populate=appointments`,
      {
        headers: {
          Authorization: `Bearer ${this.token.jwt}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const res: Data = await lastValueFrom(userData);
    this.data = res;
    this.choosenPic = res.pic;
    console.log(res);
  }
  async updatePic(picId: number) {
    const update = {
      pic: picId,
    };
    try {
      const req = this.http.put(
        `http://localhost:1337/api/users/${this.token.user.id}`,
        update,
        {
          headers: {
            Authorization: `Bearer ${this.token.jwt}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const res = await lastValueFrom(req);
      console.log('==========resutl=========');
      const userData = this.http.get<Data>(
        `http://localhost:1337/api/users/${this.token.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${this.token.jwt}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const res1: Data = await lastValueFrom(userData);
      this.data = res1;
      console.log(res, '\n', res1);
      window.localStorage.clear();
      window.localStorage.setItem(
        'user',
        JSON.stringify({ jwt: this.token.jwt, user: res1 })
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  openModal() {
    this.modal = !this.modal;
  }
}
