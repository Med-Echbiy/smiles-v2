import { TestBed } from '@angular/core/testing';

import { AvaiableServicesService } from './avaiable-services.service';

describe('AvaiableServicesService', () => {
  let service: AvaiableServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaiableServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
