import { Component, OnInit } from '@angular/core';
import {PortfolioResults} from '../models/portfolio-results.model';
import {BehaviorSubject} from 'rxjs';
import { PortfolioServiceService } from './service/portfolio-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: []
})
export class PortfolioComponent implements OnInit {

  public unrealizedProfit:number = 0;
  constructor( private portfoliService : PortfolioServiceService) {
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

}
