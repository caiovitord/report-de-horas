
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportHorasModule } from './report-horas/report-horas.module';
import { SharedModule } from '../shared/shared.module';
import { RequisitosModule } from './requisitos/requisitos.module';


@NgModule({
  imports: [
    CommonModule,
    ReportHorasModule,
    SharedModule,
    RequisitosModule
  ],
  declarations: []

})
export class PagesModule { }
