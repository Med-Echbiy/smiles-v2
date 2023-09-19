import { TestBed } from '@angular/core/testing';

import { EmptyTimeService } from './empty-time.service';

describe('EmptyTimeService', () => {
  let service: EmptyTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptyTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
