import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveComponent } from './save/save.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SaveComponent,
    FormDebugComponent
  ],
  exports: [
    SaveComponent,
    FormDebugComponent
  ]
})


export class TestesModule { }
