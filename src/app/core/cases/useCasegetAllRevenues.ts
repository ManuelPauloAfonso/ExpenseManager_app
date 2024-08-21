import { Injectable } from '@angular/core';
import AllRevenuesCase from '../interface/allRevenuesCase';
import { expensesData } from '../interface/expenses';
import { ExpensesHttpServiceService } from '../services/http/expenses-http-service.service';

@Injectable({
  providedIn: 'root',
})
export class UseCaseGetAllRevenues {
  constructor(private expensesHttpService: ExpensesHttpServiceService) {}
}
