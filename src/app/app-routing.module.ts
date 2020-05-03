import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAreaComponent } from './modules/home/components/search-area/search-area.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { MarketMainComponent } from './modules/markets/components/market-main/market-main.component';
import { ResearchMainComponent } from './modules/research/components/research-main/research-main.component';
import { PortfolioMainComponent } from './modules/portfolio/components/portfolio-main/portfolio-main.component';
import { WatchlistMainComponent } from './modules/watchlist/components/watchlist-main/watchlist-main.component';
import { HomeModule } from './modules/home/home.module';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren:() => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path:"markets",
    loadChildren:() => import('./modules/markets/markets.module').then(mod => mod.MarketsModule)
  },
  {
    path:"portfolio",
    loadChildren:() => import('./modules/portfolio/portfolio.module').then(mod => mod.PortfolioModule)
  },
  {
    path:"watchlist",
    loadChildren:() => import('./modules/watchlist/watchlist.module').then(mod => mod.WatchlistModule)
  },
  {
    path:"research",
    loadChildren:() => import('./modules/research/research.module').then(mod => mod.ResearchModule)
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
