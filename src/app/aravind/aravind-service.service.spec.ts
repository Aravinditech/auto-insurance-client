import { TestBed } from '@angular/core/testing';

import { AravindServiceService } from './aravind-service.service';

describe('AravindServiceService', () => {
  let service: AravindServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AravindServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
