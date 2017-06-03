import { TestBed, inject } from '@angular/core/testing';

import { ToolsjsonService } from './toolsjson.service';

describe('ToolsjsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolsjsonService]
    });
  });

  it('should be created', inject([ToolsjsonService], (service: ToolsjsonService) => {
    expect(service).toBeTruthy();
  }));
});
