import { TestBed, inject } from '@angular/core/testing';

import { SecurityCheckService } from './security-check.service';

describe('SecurityCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityCheckService]
    });
  });

  it('should be created', inject([SecurityCheckService], (service: SecurityCheckService) => {
    expect(service).toBeTruthy();
  }));
});
