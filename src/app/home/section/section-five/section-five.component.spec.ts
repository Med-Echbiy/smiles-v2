import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFiveComponent } from './section-five.component';

describe('SectionFiveComponent', () => {
  let component: SectionFiveComponent;
  let fixture: ComponentFixture<SectionFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFiveComponent]
    });
    fixture = TestBed.createComponent(SectionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
