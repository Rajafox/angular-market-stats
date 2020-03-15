import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAreaComponent } from './search-area/search-area.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarketsComponent } from './markets/markets.component';
import { ResearchComponent } from './research/research.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


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
    component:MarketsComponent
  },
  {
    path:"portfolio",
    component:PortfolioComponent
  },
  {
    path:"watchlist",
    component:WatchlistComponent
  },
  {
    path:"research",
    component:ResearchComponent
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
