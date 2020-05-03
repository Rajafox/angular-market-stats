import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { PortfolioModule } from './modules/portfolio/portfolio.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    
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
