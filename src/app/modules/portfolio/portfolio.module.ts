import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { PortfolioSummaryComponent } from './components/portfolio-summary/portfolio-summary.component';
import { PortfolioActionTabComponent } from './components/portfolio-action-tab/portfolio-action-tab.component';
import { PortfolioDataTableComponent } from './components/portfolio-data-table/portfolio-data-table.component';



@NgModule({
  declarations: [
    PortfolioMainComponent,
    PortfolioSummaryComponent,
    PortfolioActionTabComponent,
    PortfolioDataTableComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    BrowserAnimationsModule
  ]
})
export class PortfolioModule { }