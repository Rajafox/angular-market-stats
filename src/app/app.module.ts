import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { LiveMarketBannerComponent } from './header/live-market-banner/live-market-banner.component';
import { MainNavigationBannerComponent } from './header/main-navigation-banner/main-navigation-banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarketsComponent } from './markets/markets.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ResearchComponent } from './research/research.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioModule } from './portfolio/portfolio.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchAreaComponent,
    LiveMarketBannerComponent,
    MainNavigationBannerComponent,
    PageNotFoundComponent,   
    MarketsComponent,
    WatchlistComponent,
    ResearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortfolioModule
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
