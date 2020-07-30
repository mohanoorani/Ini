import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { MessageComponent } from './pages/message.component';
import { MessageRoutingModule } from './message-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
      MessageComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MessageRoutingModule
  ]
})
export class MessageModule {
  constructor() {
  }
}
