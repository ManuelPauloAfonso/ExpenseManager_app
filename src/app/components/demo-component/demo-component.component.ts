import { Component, inject, OnInit } from '@angular/core';
import { IncomeHttpServiceService } from '../../core/services/http/income-http-service.service';
import { ExpensesHttpServiceService } from '../../core/services/http/expenses-http-service.service';
import { Income } from '../../shared/models/income';
import { Expense } from '../../shared/models/expense';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrl: './demo-component.component.scss'
})
export class DemoComponentComponent implements OnInit{

  public incomes: Income[] = [];
  public expenses: Expense[] = [];

  private incomeHttpService = inject(IncomeHttpServiceService);
  private expenseHttpService = inject(ExpensesHttpServiceService);


  ngOnInit(): void {
    this.getIncomes();
    this.getExpenses();
  }

  private getIncomes(): void {
    this.incomeHttpService.getInvoices()
    .subscribe(incomes => {
      this.incomes = incomes;
    })
  }

  private getExpenses(): void {
    this.expenseHttpService.getExpenses()
    .subscribe(expenses => {
      this.expenses = expenses
    })
  }

}
