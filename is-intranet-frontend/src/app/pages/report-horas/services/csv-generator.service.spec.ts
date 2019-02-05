import { TestBed, inject } from '@angular/core/testing';

import { CsvGeneratorService } from './csv-generator.service';

describe('CsvGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvGeneratorService]
    });
  });

  it('should be created', inject([CsvGeneratorService], (service: CsvGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
