import { TestBed } from '@angular/core/testing';

import { IncomeHttpServiceService } from './income-http-service.service';

describe('IncomeHttpServiceService', () => {
  let service: IncomeHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
