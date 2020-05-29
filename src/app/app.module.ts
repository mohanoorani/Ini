import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertifyService } from './shared/services';
import { FormsModule } from '@angular/forms';
import { DashboardCachingService } from './pages/dashboard/services/dashboard.cache';
import { SharedModule } from './shared/shared.module';
import { ContactUsService } from './pages/contactus/services/contactus.service';

@NgModule({
  declarations: [
    AppComponent,
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
    DashboardCachingService,
    ContactUsService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
