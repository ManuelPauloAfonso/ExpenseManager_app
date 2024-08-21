import { ExpensesHttpServiceService } from './../../core/services/http/expenses-http-service.service';
import { IncomeHttpServiceService } from './../../core/services/http/income-http-service.service';
import { Income } from './../../shared/models/income';
import { Expense } from './../../shared/models/expense';
import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  sexo: number;
  idade: number;
  salario: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public Incomes: Income[] = [];
  public Expense: Expense[] = [];

  private incomeHttpService = inject(IncomeHttpServiceService);
  private expensesHttpService = inject(ExpensesHttpServiceService);

  ngOnInit(): void {
    this.getExpense();
    this.getIncomes();
  }

  private getIncomes(): void {
    this.incomeHttpService.getInvoices().subscribe((incomes) => {
      this.Incomes = incomes;
      this.updateDataSource();
    });
  }
  private getExpense(): void {
    this.expensesHttpService.getExpenses().subscribe((expense) => {
      this.Expense = expense;
    });
  }

  private updateDataSource(): void {
    const allData = [...this.Incomes];
    this.dataSource.data = allData;
  }

  displayedColumns: string[] = ['descrição', 'valor', 'origem', 'data'];
  dataSource = new MatTableDataSource(this.Incomes);
}
