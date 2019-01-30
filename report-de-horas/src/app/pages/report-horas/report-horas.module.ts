import { TestesModule } from './../../testes/testes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RhPaginaComponent } from './rh-pagina/rh-pagina.component';
import { RhFormComponent } from './rh-form/rh-form.component';
import { BtnAddRequisitoComponent } from './btn-add-requisito/btn-add-requisito.component';
import { FormtesteComponent } from './rh-form/formteste/formteste.component';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestesModule,
    NgSelectModule,
    FormsModule
  ],
  declarations: [
    RhPaginaComponent,
    RhFormComponent,
    BtnAddRequisitoComponent,
    FormtesteComponent
  ]
})
export class ReportHorasModule { }
