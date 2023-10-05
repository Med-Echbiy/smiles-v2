import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateAppointmentService {
  constructor(private http: HttpClient) {}
  user = window.localStorage.getItem('user');
  token = this.user && JSON.parse(this.user);

  async createAppointment(userInfo: {
    fullName: string;
    service: { id: number };
    phone: string;
    age: string;
    adress: string;
  }) {
    const dataObj = {
      data: {
        fullName: userInfo.fullName,
        service: userInfo.service.id,
        users_permissions_user: this.token.user.id,
        email: this.token.user.email,
        phone: userInfo.phone,
        age: userInfo.age,
        adress: userInfo.adress,
      },
    };
    console.log(dataObj);
    try {
      const data = this.http.post(
        'https://dentist-strapi.onrender.com/api/appointments',
        dataObj,
        {
          headers: {
            Authorization: `Bearer ${this.token.jwt}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const response = await lastValueFrom(data);
      console.log(response);
      return { status: 200 };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      return { status: 500, message: err.error.error.message };
    }
  }
}
