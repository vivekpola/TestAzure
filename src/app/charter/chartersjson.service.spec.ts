import { TestBed, inject } from '@angular/core/testing';

import { ChartersjsonService } from './chartersjson.service';

describe('ChartersjsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartersjsonService]
    });
  });

  it('should be created', inject([ChartersjsonService], (service: ChartersjsonService) => {
    expect(service).toBeTruthy();
  }));
});
