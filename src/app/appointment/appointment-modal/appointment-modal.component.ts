import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { lastValueFrom } from 'rxjs';
//
@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
})
export class AppointmentModalComponent implements OnChanges {
  constructor(private http: HttpClient) {}
  user = window.localStorage.getItem('user');
  token = this.user && JSON.parse(this.user);
  @Input() isOpen = false;
  @Input() userInfo = {
    fullName: '',
    age: '',
    adress: '',
    service: {
      image: '',
      name: '',
    },
    phone: '',
  };
  @Output() toggleIsOpenToFalse = new EventEmitter();
  toggleOpen() {
    this.toggleIsOpenToFalse.emit();
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change['isOpen'].currentValue, 'changes');
  }
  async createAppointment() {
    const dataObj = {
      data: {
        fullName: this.userInfo.fullName,
        service: 1,
        users_permissions_user: this.token.user.id,
        email: this.token.user.email,
        phone: this.userInfo.phone,
        age: this.userInfo.age,
        adress: this.userInfo.adress,
      },
    };

    try {
      const data = this.http.post(
        'http://localhost:1337/api/appointments',
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
    } catch (err) {
      console.log(err);
    }
  }
}
