import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
//
@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
})
export class AppointmentModalComponent implements OnChanges {
  constructor() {}
  CurrentTimes = ['16:00', '14:30', '12:00']; // this will be return from backend avaiable time the day he choose
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
    date: {
      day: '',
      month: '',
      time: '',
    },
  };
  @Output() toggleIsOpenToFalse = new EventEmitter();
  toggleOpen() {
    this.toggleIsOpenToFalse.emit();
  }
  chooseTime(time: string) {
    this.chossenTime = time;
  }
  chossenTime: string = '';
  ngOnChanges(change: SimpleChanges) {
    console.log(change['isOpen'].currentValue, 'changes');
  }
}
