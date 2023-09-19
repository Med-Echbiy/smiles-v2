import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourComponent } from './section-four.component';

describe('SectionFourComponent', () => {
  let component: SectionFourComponent;
  let fixture: ComponentFixture<SectionFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFourComponent]
    });
    fixture = TestBed.createComponent(SectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
