
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportHorasModule } from './report-horas/report-horas.module';
import { SharedModule } from '../shared/shared.module';
import { RequisitosModule } from './requisitos/requisitos.module';
import { SprintsModule } from './sprints/sprints.module';


@NgModule({
  imports: [
    CommonModule,
    ReportHorasModule,
    SharedModule,
    RequisitosModule,
    SprintsModule
  ],
  declarations: []

})
export class PagesModule { }
