import { TestBed, inject } from '@angular/core/testing';

import { AlunoServiceService } from './aluno-service.service';

describe('AlunoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoServiceService]
    });
  });

  it('should be created', inject([AlunoServiceService], (service: AlunoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
