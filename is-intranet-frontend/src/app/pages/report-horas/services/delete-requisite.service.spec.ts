import { TestBed, inject } from '@angular/core/testing';

import { DeleteRequisiteService } from './delete-requisite.service';

describe('DeleteRequisitoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteRequisiteService]
    });
  });

  it('should be created', inject([DeleteRequisiteService], (service: DeleteRequisiteService) => {
    expect(service).toBeTruthy();
  }));
});
