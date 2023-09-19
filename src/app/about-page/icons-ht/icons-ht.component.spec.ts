import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsHtComponent } from './icons-ht.component';

describe('IconsHtComponent', () => {
  let component: IconsHtComponent;
  let fixture: ComponentFixture<IconsHtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsHtComponent]
    });
    fixture = TestBed.createComponent(IconsHtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
