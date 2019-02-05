import { TestBed, inject } from '@angular/core/testing';

import { DevelopersService } from './developers.service';

describe('DesenvolvedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevelopersService]
    });
  });

  it('should be created', inject([DevelopersService], (service: DevelopersService) => {
    expect(service).toBeTruthy();
  }));
});
