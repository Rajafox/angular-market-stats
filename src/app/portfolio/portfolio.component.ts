import { Component, OnInit } from '@angular/core';
import {PortfolioResults} from '../models/portfolio-results.model';
import {BehaviorSubject} from 'rxjs';
import { PortfolioServiceService } from '../portfolio-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: []
})
export class PortfolioComponent implements OnInit {

  constructor( private portfoliService : PortfolioServiceService) {
    this.portfolioDataSource = new BehaviorSubject<PortfolioResults[]>(
      portfoliService.getUserPortfolioData()
    );
   }

  
  ngOnInit(): void {
  }

  

  public portfolioDataSource: BehaviorSubject<PortfolioResults[]>;
  public DisplayedColumns: string[] = ['company', 'investedValue', 'marketValue', `todayChange`];

}
