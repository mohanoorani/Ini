import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestListComponent } from './pages/list/request-list.component';
import { SingleRequestComponent } from './pages/single/single-request.component';

const routes: Routes = [
  { path: '', component: RequestListComponent },
  { path: ':requestCode', component: SingleRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
