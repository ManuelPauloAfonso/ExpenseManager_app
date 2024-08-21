import { Component, Input } from '@angular/core';
import { FinanceOverviewComponent } from '../finance-overview/finance-overview.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() openDialog!: () => void;
}
