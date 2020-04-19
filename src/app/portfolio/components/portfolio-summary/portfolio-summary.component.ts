import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.scss']
})
export class PortfolioSummaryComponent implements OnInit {

  @Input("unrealizedgain")
  public unrealizedGain: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public isGain( ):boolean{
    return this.unrealizedGain >= 0;
  }

  public isLoss( ):boolean{
    return !this.isGain( );
  }

}
