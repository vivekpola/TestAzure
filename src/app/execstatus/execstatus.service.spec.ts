import { TestBed, inject } from '@angular/core/testing';
import { execstatusService } from './execstatus.service';
describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [execstatusService]
    });
  });
  it('should be created', inject([execstatusService], (service: execstatusService) => {
    expect(service).toBeTruthy();
  }));
});