import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RhPaginaComponent } from './rh-pagina/rh-pagina.component';
import { RhFormComponent } from './rh-form/rh-form.component';
import { BtnAddRequisitoComponent } from './btn-add-requisito/btn-add-requisito.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RhPaginaComponent, RhFormComponent, BtnAddRequisitoComponent]
})
export class ReportHorasModule { }
