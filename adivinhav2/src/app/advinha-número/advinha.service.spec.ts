import { TestBed, inject } from '@angular/core/testing';

import { AdvinhaService } from './advinha.service';

describe('AdvinhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvinhaService]
    });
  });

  it('should be created', inject([AdvinhaService], (service: AdvinhaService) => {
    expect(service).toBeTruthy();
  }));
});
