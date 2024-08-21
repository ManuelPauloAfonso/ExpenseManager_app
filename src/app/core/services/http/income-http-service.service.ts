import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Income } from '../../../shared/models/income';

@Injectable({
  providedIn: 'root',
})
export class IncomeHttpServiceService {
  getTotal() {
    throw new Error('Method not implemented.');
  }
  private apiURL = 'http://localhost:3000/';
  private http = inject(HttpClient);

  public getInvoices(): Observable<Income[]> {
    return this.http.get<Income[]>(`${this.apiURL}income`);
  }

  /**
   * Put all other methods here.
   *
   * Some of examples are:
   *
   * getIncomeById, createIncome, updateIncome, etc.
   */
}
