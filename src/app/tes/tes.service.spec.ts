import { TestBed, inject } from '@angular/core/testing';
import { tesService } from './tes.service';
describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [tesService]
    });
  });
  it('should be created', inject([tesService], (service: tesService) => {
    expect(service).toBeTruthy();
  }));
});