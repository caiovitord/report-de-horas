import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqNewPageComponent } from './req-new-page/req-new-page.component';
import { ReqFormComponent } from './req-form/req-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ReqNewPageComponent,
    ReqFormComponent
  ]
})
export class RequisitosModule { }
