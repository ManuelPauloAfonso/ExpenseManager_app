import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../../shared/models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesHttpServiceService {
  private apiURL = 'http://localhost:3000/';
  private http = inject(HttpClient);

  public getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiURL}expenses`);
  }

  /**
   * Put all other methods here.
   *
   * Some of examples are:
   *
   * getExpenseById, createExpense, updateExpense, etc.
   */
}
