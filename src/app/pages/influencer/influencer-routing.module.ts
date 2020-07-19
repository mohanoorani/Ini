import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfluencerListComponent } from './pages/list/influencer-list.component';
import { InfluencerComponent } from './pages/single/influencer.component';
import { InfluencerSearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'list', component: InfluencerListComponent },
  { path: ':id', component: InfluencerListComponent },
  { path: 'detail/:id', component: InfluencerComponent },
  { path: 'search/:query', component: InfluencerSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerRoutingModule { }
