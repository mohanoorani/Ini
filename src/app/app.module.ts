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
import { AppCreateRequestComponent } from './pages/request/components/app-create-request/app-create-request.component';
import { RequestService } from './pages/request/services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    AppCreateRequestComponent
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
    RequestService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
