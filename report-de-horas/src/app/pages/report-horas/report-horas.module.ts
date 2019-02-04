import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { RhPaginaComponent } from './rh-pagina/rh-pagina.component';
import { RhFormComponent } from './rh-form/rh-form.component';
import { BtnAddRequisitoComponent } from './btn-add-requisito/btn-add-requisito.component';
import { TestesModule } from './../../testes/testes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RhContainerComponent } from './rh-pagina/rh-container/rh-container.component';
import { BtnRemoverRequisitoComponent } from './btn-remover-requisito/btn-remover-requisito.component';
import { SharedModule } from './../../shared/shared.module';

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
    RhContainerComponent,
    BtnRemoverRequisitoComponent
  ],
  entryComponents: [RhFormComponent, RhContainerComponent]
})
export class ReportHorasModule { }
