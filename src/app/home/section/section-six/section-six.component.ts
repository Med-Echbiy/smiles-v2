import { Component } from '@angular/core';

@Component({
  selector: 'app-section-six',
  templateUrl: './section-six.component.html',
  styleUrls: ['./section-six.component.scss'],
})
export class SectionSixComponent {
  constructor() {}
  schedule = [
    {
      day: 'Monday',
      openAt: '08:00',
      closeIn: '20:00',
    },
    {
      day: 'Tuesday',
      openAt: '08:00',
      closeIn: '20:00',
    },
    {
      day: 'Wednesday',
      openAt: '08:00',
      closeIn: '20:00',
    },
    {
      day: 'Thursday',
      openAt: '08:00',
      closeIn: '20:00',
    },
    {
      day: 'Friday',
      openAt: '08:00',
      closeIn: '20:00',
    },
    {
      day: 'Saturday',
      openAt: '10:00',
      closeIn: '16:00',
    },
    {
      day: 'Sunday',
      openAt: '10:00',
      closeIn: '16:00',
    },
  ];
}
