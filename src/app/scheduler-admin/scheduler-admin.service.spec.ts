import { TestBed, inject } from '@angular/core/testing';

import { SchedulerAdminService } from './scheduler-admin.service';

describe('SchedulerAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulerAdminService]
    });
  });

  it('should be created', inject([SchedulerAdminService], (service: SchedulerAdminService) => {
    expect(service).toBeTruthy();
  }));
});
