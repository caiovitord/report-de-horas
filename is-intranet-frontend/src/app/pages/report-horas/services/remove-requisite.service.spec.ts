import { TestBed, inject } from '@angular/core/testing';

import { RemoveRequisiteService } from './remove-requisite.service';

describe('RemoveRequisiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveRequisiteService]
    });
  });

  it('should be created', inject([RemoveRequisiteService], (service: RemoveRequisiteService) => {
    expect(service).toBeTruthy();
  }));
});
