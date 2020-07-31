import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertifyService } from './shared/services';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { UserPanelService } from './pages/userPanel/services/userPanel.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    AuthenticationModule
  ],
  providers: [
    AlertifyService,
    UserPanelService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
