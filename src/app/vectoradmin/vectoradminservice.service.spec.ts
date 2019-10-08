import { TestBed, inject } from '@angular/core/testing';

import { VectoradminserviceService } from './vectoradminservice.service';

describe('VectoradminserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VectoradminserviceService]
    });
  });

  it('should be created', inject([VectoradminserviceService], (service: VectoradminserviceService) => {
    expect(service).toBeTruthy();
  }));
});
