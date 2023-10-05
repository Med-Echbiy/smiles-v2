import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface Appointments {
  adress: string;
  approved: boolean;
  createdAt: string;
  date: null | string;
  email: string;
  fullName: string;
  id: number;
  phone: string;
  publishedAt: string;
  time: null | string;
  updatedAt: string;
  service: {
    serviceName: string;
    id: number;
    photo: {
      id: number;
      url: string;
    };
  };
}

interface Data {
  appointments: Appointments[];
  email: string;
  id: number;
  pic: number;
  gender: 'male' | 'female';
  username: string;
  fullName: string;
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
  services = [];
  modal = false;
  // appoitmentModal = false;
  token = this.user && JSON.parse(this.user);
  constructor(private http: HttpClient) {}
  data: Data = {
    appointments: [],
    email: '',
    id: 0,
    pic: 0,
    username: '',
    gender: 'male',
    fullName: '',
  };
  choosenPic: number = 0;
  appointments: never[] | Appointments[] = [];
  confirmedAppointments = false;
  notConfirmedAppointmets = false;
  // selectedAppointment: Appointments = {
  //   adress: '',
  //   approved: false,
  //   createdAt: '',
  //   date: null,
  //   email: '',
  //   fullName: '',
  //   id: 0,
  //   phone: '',
  //   publishedAt: '',
  //   time: null,
  //   updatedAt: '',
  //   service: {
  //     serviceName: '',
  //     id: 0,
  //     photo: {
  //       id: 0,
  //       url: '',
  //     },
  //   },
  // };
  async ngOnInit(): Promise<void> {
    const userData = this.http.get<Data>(
      `https://dentist-strapi.onrender.com/api/users/${this.token.user.id}?populate[appointments][populate][service][fields][0]=serviceName&populate[appointments][populate][service][populate][photo][fields][0]=url`,
      {
        headers: {
          Authorization: `Bearer ${this.token.jwt}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const res: Data = await lastValueFrom(userData);
    this.data = res;
    this.appointments = res.appointments as [];
    this.choosenPic = res.pic;
    this.confirmedAppointments =
      this.appointments.filter((e) => e.approved).length > 0;
    this.notConfirmedAppointmets =
      this.appointments.filter((e) => !e.approved).length > 0;
  }
  async updatePic(picId: number) {
    const update = {
      pic: picId,
    };
    try {
      const req = this.http.put(
        `https://dentist-strapi.onrender.com/api/users/${this.token.user.id}`,
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
        `https://dentist-strapi.onrender.com/api/users/${this.token.user.id}`,
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
