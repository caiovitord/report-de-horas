import { TestBed, inject } from '@angular/core/testing';

import { RequisitoService } from './requisitos.service';

describe('RequisitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequisitoService]
    });
  });

  it('should be created', inject([RequisitoService], (service: RequisitoService) => {
    expect(service).toBeTruthy();
  }));
});
