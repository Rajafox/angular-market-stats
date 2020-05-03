import { Injectable } from '@angular/core';
import { PortfolioResults } from '../models/portfolio-results.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  private  portfolioData: PortfolioResults[] = [
    { company: 'Infosys', investedValue: 20000, marketValue: 30000, todayChange: '+4' },
    { company: 'HUL', investedValue: 30000, marketValue: 20000, todayChange: '-5' },
    { company: 'Titan', investedValue: 40000, marketValue: 20000, todayChange: '-10' },
    { company: 'Reliance', investedValue: 20000, marketValue: 50000, todayChange: '+10' },
    { company: 'IGL', investedValue: 10000, marketValue: 20000, todayChange: '+10' }
  ];

  constructor(private http: HttpClient) { }

  public getUserPortfolioData(): Observable<PortfolioResults[]>{
    return this.http.get<PortfolioResults[]>('./assets/portfolio-grid-data.json');
  }

}
