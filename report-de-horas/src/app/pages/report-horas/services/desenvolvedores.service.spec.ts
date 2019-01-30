import { TestBed, inject } from '@angular/core/testing';

import { DesenvolvedoresService } from './desenvolvedores.service';

describe('DesenvolvedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesenvolvedoresService]
    });
  });

  it('should be created', inject([DesenvolvedoresService], (service: DesenvolvedoresService) => {
    expect(service).toBeTruthy();
  }));
});
