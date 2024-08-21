import { TestBed } from '@angular/core/testing';

import { ExpensesHttpServiceService } from './expenses-http-service.service';

describe('ExpensesHttpServiceService', () => {
  let service: ExpensesHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensesHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
