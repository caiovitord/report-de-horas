import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { RhNewPageComponent } from './rh-new-page/rh-new-page.component';
import { RhFormComponent } from './rh-form/rh-form.component';
import { BtnAddRequisitoComponent } from './btn-add-requisito/btn-add-requisito.component';
import { TestesModule } from './../../testes/testes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RhContainerComponent } from './rh-new-page/rh-container/rh-container.component';
import { BtnRemoveRequisiteComponent } from './btn-remove-requisite/btn-remove-requisite.component';
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
    RhNewPageComponent,
    RhFormComponent,
    BtnAddRequisitoComponent,
    RhFormComponent,
    RhContainerComponent,
    BtnRemoveRequisiteComponent
  ],
  entryComponents: [RhFormComponent, RhContainerComponent]
})
export class ReportHorasModule { }
