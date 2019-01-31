import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RhPaginaComponent } from './rh-pagina/rh-pagina.component';
import { RhFormComponent } from './rh-form/rh-form.component';
import { BtnAddRequisitoComponent } from './btn-add-requisito/btn-add-requisito.component';
import { TestesModule } from './../../testes/testes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { RhContainerComponent } from './rh-pagina/rh-container/rh-container.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestesModule,
    NgSelectModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RhPaginaComponent,
    RhFormComponent,
    BtnAddRequisitoComponent,
    RhFormComponent,
    RhContainerComponent
  ],
  entryComponents: [RhFormComponent, RhContainerComponent]
})
export class ReportHorasModule { }
