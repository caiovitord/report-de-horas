import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqNewPageComponent } from './req-new-page/req-new-page.component';
import { ReqFormComponent } from './req-form/req-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReqNewPageComponent,
    ReqFormComponent
  ]
})
export class RequisitosModule { }
