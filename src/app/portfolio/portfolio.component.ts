import { Component, OnInit } from '@angular/core';
import {PortfolioResults} from '../models/portfolio-results.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() {
    this.portfolioDataSource = new BehaviorSubject<PortfolioResults[]>(
      this.portfolioData
    );
   }

  
  ngOnInit(): void {
  }

  public portfolioData: PortfolioResults[] = [
    { company: 'Infosys', investedValue: 20000, marketValue: 30000, todayChange: '+4' },
    { company: 'HUL', investedValue: 30000, marketValue: 20000, todayChange: '-5' },
    { company: 'Titan', investedValue: 40000, marketValue: 20000, todayChange: '-10' },
    { company: 'Reliance', investedValue: 20000, marketValue: 50000, todayChange: '+10' },
    { company: 'IGL', investedValue: 10000, marketValue: 20000, todayChange: '+10' }
  ];

  public portfolioDataSource: BehaviorSubject<PortfolioResults[]>;
  public DisplayedColumns: string[] = ['company', 'investedValue', 'marketValue', `todayChange`];

}
