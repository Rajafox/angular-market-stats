
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';
import { PortfolioSummaryComponent } from './components/portfolio-summary/portfolio-summary.component';
import { PortfolioActionTabComponent } from './components/portfolio-action-tab/portfolio-action-tab.component';
import { PortfolioDataTableComponent } from './components/portfolio-data-table/portfolio-data-table.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioStockAdditionComponent } from './components/portfolio-stock-addition/portfolio-stock-addition.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PortfolioMainComponent,
    PortfolioSummaryComponent,
    PortfolioActionTabComponent,
    PortfolioDataTableComponent,
    PortfolioStockAdditionComponent
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    CdkTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class PortfolioModule { }
