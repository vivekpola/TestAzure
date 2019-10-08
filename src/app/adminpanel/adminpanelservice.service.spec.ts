import { TestBed, inject } from '@angular/core/testing';

import { AdminpanelserviceService } from './adminpanelservice.service';

describe('AdminpanelserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminpanelserviceService]
    });
  });

  it('should be created', inject([AdminpanelserviceService], (service: AdminpanelserviceService) => {
    expect(service).toBeTruthy();
  }));
});
