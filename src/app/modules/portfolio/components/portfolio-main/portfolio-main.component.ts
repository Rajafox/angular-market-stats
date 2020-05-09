import { Component, OnInit, Inject } from '@angular/core';
import { PortfolioServiceService } from '../../services/portfolio-service.service';
import { PortfolioResults } from '../../models/portfolio-results.model';
import { BehaviorSubject } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PortfolioStockAdditionComponent } from '../portfolio-stock-addition/portfolio-stock-addition.component';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.scss']
})
export class PortfolioMainComponent implements OnInit {

  public unrealizedProfit:number = 0;
  constructor( private portfoliService : PortfolioServiceService, public dialog: MatDialog) {
    this.portfolioDataSource = new BehaviorSubject<PortfolioResults[]>( [] );
    this.portfoliService.getUserPortfolioData().subscribe({
      next: v => {
        this.getUnrealizedProfit(v);
        this.portfolioDataSource.next(v)
      },
      error: v => this.portfolioDataSource.error(v),
      complete: () => this.portfolioDataSource.complete()
    });
   }

   public isProfit(element:any):boolean{
     return ( (element.investedValue - element.marketValue )>0 );
   }

   public isLoss(element:any):boolean{
    return !this.isProfit(element);
  }
  
  ngOnInit(): void {
  }

  public getUnrealizedProfit(results:PortfolioResults[]):void{
    for(let result of results){
      this.unrealizedProfit = this.unrealizedProfit + (result.investedValue - result.marketValue );
    }
  }

  public portfolioDataSource: BehaviorSubject<PortfolioResults[]>;
  public DisplayedColumns: string[] = ['company', 'investedValue', 'marketValue', `todayChange`, 'profitLoss'];

  
  onAddStockClick(): void{
    const dialogRef = this.dialog.open(PortfolioStockAdditionComponent, {
      width: '350px',
      data: {title:'Add stock to your portfolio'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
    });
  }
  

}
