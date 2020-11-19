import { TestBed } from '@angular/core/testing';

import { ErrorSearchService } from './error-search.service';

describe('ErrorSearchService', () => {
  let service: ErrorSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
