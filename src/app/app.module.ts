import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { FinanceOverviewComponent } from './components/finance-overview/finance-overview.component';
import { CommonModule } from '@angular/common';
import { UseCaseGetAllRevenues } from './core/cases/useCasegetAllRevenues';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import {
  ModalComponent,
  ModalDialogComponent,
} from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    DateSelectorComponent,
    FinanceOverviewComponent,
    DemoComponentComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
