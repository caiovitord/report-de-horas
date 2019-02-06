import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqNewPageComponent } from './req-new-page/req-new-page.component';
import { ReqFormComponent } from './req-form/req-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TestesModule } from '../../testes/testes.module';
import { ReqListComponent } from './req-list/req-list.component';
import { ReqEditComponent } from './req-edit/req-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TestesModule,
    RouterModule
  ],
  declarations: [
    ReqNewPageComponent,
    ReqFormComponent,
    ReqListComponent,
    ReqEditComponent
  ]
})
export class RequisitosModule { }
