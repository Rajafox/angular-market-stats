import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketMainComponent } from './components/market-main/market-main.component';


const routes: Routes = [
  {
    path:'',
    component:MarketMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule { }
