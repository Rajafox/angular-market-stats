import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { PortfolioStockAdditionComponent } from './modules/portfolio/components/portfolio-stock-addition/portfolio-stock-addition.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents:[PortfolioStockAdditionComponent]
})
export class AppModule { }
