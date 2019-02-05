import { TestBed, inject } from '@angular/core/testing';

import { QuantidadeFormsService } from './quantidade-forms.service';

describe('QuantidadeFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuantidadeFormsService]
    });
  });

  it('should be created', inject([QuantidadeFormsService], (service: QuantidadeFormsService) => {
    expect(service).toBeTruthy();
  }));
});
