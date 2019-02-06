import { TestBed, inject } from '@angular/core/testing';

import { ServerResponseService } from './server-response.service';

describe('ServerResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerResponseService]
    });
  });

  it('should be created', inject([ServerResponseService], (service: ServerResponseService) => {
    expect(service).toBeTruthy();
  }));
});
