import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelRouteModule } from './userPanel-routing.module';
import { UserPanelComponent } from './pages/userPanel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserPanelRouteModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    UserPanelComponent
  ],
  providers: [],
  exports: []
})
export class UserPanelModule {}
