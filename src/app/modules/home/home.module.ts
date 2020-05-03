import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SearchAreaComponent } from './components/search-area/search-area.component';



@NgModule({
  declarations: [HomeMainComponent, SearchAreaComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
