import { TestBed, inject } from '@angular/core/testing';

import { AddRequisiteFormService } from './add-requisite-form.service';

describe('AddRequisiteFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRequisiteFormService]
    });
  });

  it('should be created', inject([AddRequisiteFormService], (service: AddRequisiteFormService) => {
    expect(service).toBeTruthy();
  }));
});
