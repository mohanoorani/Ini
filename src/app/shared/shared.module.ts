import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorDirective, PermissionDirective } from './directive';
import { GetErrorPipe } from './pipe';
import { AppGridComponent, BreadCrumbComponent, AppContactUsDetailComponent } from './components';
import { SharedServiceModule } from './services/shared-service.module';
import { CrudComponent } from './components/Crud/crud.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedServiceModule,
  ]
  ,
  declarations: [
    InputErrorDirective,
    PermissionDirective,
    GetErrorPipe,
    AppGridComponent,
    BreadCrumbComponent,
    CrudComponent,
    AppContactUsDetailComponent
  ]
  ,
  exports: [
    InputErrorDirective,
    PermissionDirective,
    BreadCrumbComponent,
    CrudComponent,
    AppGridComponent,
    AppContactUsDetailComponent
  ],
  providers: [SharedServiceModule]
})


export class SharedModule { }
