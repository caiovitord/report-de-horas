import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';


import { SpNewPageComponent } from './sp-new-page/sp-new-page.component';
import { SpFormComponent } from './sp-form/sp-form.component';
import { SpListComponent } from './sp-list/sp-list.component';
import { SharedModule } from './../../shared/shared.module';
import { TestesModule } from './../../testes/testes.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    TestesModule,
    NgSelectModule
  ],
  declarations: [SpNewPageComponent, SpFormComponent, SpListComponent]
})
export class SprintsModule { }
