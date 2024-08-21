import { TotalService } from './../../core/services/http/total.service';
import { Total } from '../../shared/models/total';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-overview',
  templateUrl: './finance-overview.component.html',
  styleUrls: ['./finance-overview.component.scss'],
})
export class FinanceOverviewComponent implements OnInit {
  public totalReceita: Total | null = null;

  constructor(private totalService: TotalService) {}

  ngOnInit(): void {
    this.loadTotal();
  }

  private loadTotal(): void {
    this.totalService.getTotal().subscribe(
      (dados: Total) => {
        this.totalReceita = dados;
      },
      (err: any) => {
        console.error('Failed to load totals', err);
      }
    );
  }
}
