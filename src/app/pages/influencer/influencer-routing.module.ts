import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfluencerListComponent } from './pages/list/influencer-list.component';
import { InfluencerComponent } from './pages/influencer/influencer.component';
import { InfluencerSearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'',component:InfluencerListComponent},
  {path:'detail/:id/:title',component:InfluencerComponent},
  {path:'search/:value',component: InfluencerSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerRoutingModule { }
