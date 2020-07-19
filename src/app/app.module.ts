import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertifyService } from './shared/services';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ContactUsService } from './pages/contactus/services/contactus.service';
import { AuthService, AuthInterceptor } from './authentication/services';
import { AppCreateRequestComponent } from './pages/influencer/components/app-create-request/app-create-request.component';
import { UserPanelService } from './pages/userPanel/services/userPanel.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    SharedModule
  ],
  providers: [
    AlertifyService,
    ContactUsService,
    AuthService,
    UserPanelService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
