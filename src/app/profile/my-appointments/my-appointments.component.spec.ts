import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppointmentsComponent } from './my-appointments.component';

describe('MyAppointmentsComponent', () => {
  let component: MyAppointmentsComponent;
  let fixture: ComponentFixture<MyAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppointmentsComponent]
    });
    fixture = TestBed.createComponent(MyAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});