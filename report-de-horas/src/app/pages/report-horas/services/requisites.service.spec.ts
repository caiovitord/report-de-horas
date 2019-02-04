import { TestBed, inject } from '@angular/core/testing';

import { RequisitesService } from './requisites.service';

describe('RequisitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequisitesService]
    });
  });

  it('should be created', inject([RequisitesService], (service: RequisitesService) => {
    expect(service).toBeTruthy();
  }));
});
