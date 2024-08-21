import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Total } from '../../../shared/models/total';

@Injectable({
  providedIn: 'root',
})
export class TotalService {
  private apiUrl = 'http://localhost:3000/';
  private http = inject(HttpClient);

  public getTotal(): Observable<Total> {
    return this.http.get<Total>(`${this.apiUrl}totals`);
  }

  constructor() {}
}
