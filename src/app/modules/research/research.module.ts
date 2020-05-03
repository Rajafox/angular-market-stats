import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchMainComponent } from './components/research-main/research-main.component';


@NgModule({
  declarations: [ResearchMainComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
