import { TestBed, inject } from '@angular/core/testing';

import { DeleteRequisitoService } from './delete-requisito.service';

describe('DeleteRequisitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteRequisitoService]
    });
  });

  it('should be created', inject([DeleteRequisitoService], (service: DeleteRequisitoService) => {
    expect(service).toBeTruthy();
  }));
});
