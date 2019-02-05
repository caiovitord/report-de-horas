
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportHorasModule } from './report-horas/report-horas.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReportHorasModule,
    SharedModule

  ],
  declarations: []

})
export class PagesModule { }
