import { TestBed, inject } from '@angular/core/testing';

import { AddRequisitoService } from './add-requisito.service';

describe('AddRequisitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRequisitoService]
    });
  });

  it('should be created', inject([AddRequisitoService], (service: AddRequisitoService) => {
    expect(service).toBeTruthy();
  }));
});
