import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchMainComponent } from './components/research-main/research-main.component';


const routes: Routes = [{
  path:'',
  component:ResearchMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
