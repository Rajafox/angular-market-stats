import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAreaComponent } from './modules/home/components/search-area/search-area.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { MarketMainComponent } from './modules/markets/components/market-main/market-main.component';
import { ResearchMainComponent } from './modules/research/components/research-main/research-main.component';
import { PortfolioMainComponent } from './modules/portfolio/components/portfolio-main/portfolio-main.component';
import { WatchlistMainComponent } from './modules/watchlist/components/watchlist-main/watchlist-main.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:"home",
    component:SearchAreaComponent
  },
  {
    path:"markets",
    component:MarketMainComponent
  },
  {
    path:"portfolio",
    component:PortfolioMainComponent
  },
  {
    path:"watchlist",
    component:WatchlistMainComponent
  },
  {
    path:"research",
    component:ResearchMainComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
