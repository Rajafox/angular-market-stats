
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketMainComponent } from './components/market-main/market-main.component';
import { MarketsRoutingModule } from './markets-routing.module';


@NgModule({
  declarations: [MarketMainComponent],
  imports: [
    CommonModule,
    MarketsRoutingModule
  ]
})
export class MarketsModule { }

