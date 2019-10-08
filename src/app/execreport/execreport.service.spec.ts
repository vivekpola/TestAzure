import { TestBed, inject } from '@angular/core/testing';
import { execreportService } from './execreport.service';
describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [execreportService]
    });
  });
  it('should be created', inject([execreportService], (service: execreportService) => {
    expect(service).toBeTruthy();
  }));
});