import { FormsTesteComponent } from './rh-form/forms-teste/forms-teste.component';
import { TestesModule } from './../../testes/testes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RhPaginaComponent } from './rh-pagina/rh-pagina.component';
import { RhFormComponent } from './rh-form/rh-form.component';
import { BtnAddRequisitoComponent } from './btn-add-requisito/btn-add-requisito.component';
import { FormtesteComponent } from './rh-form/formteste/formteste.component';
import { PagesModule } from '../pages.module';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestesModule
  ],
  declarations: [RhPaginaComponent, RhFormComponent, BtnAddRequisitoComponent, FormtesteComponent, FormsTesteComponent]
})
export class ReportHorasModule { }
