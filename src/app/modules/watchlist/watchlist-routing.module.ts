import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistMainComponent } from './components/watchlist-main/watchlist-main.component';


const routes: Routes = [{
  path:'',
  component:WatchlistMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule { }
