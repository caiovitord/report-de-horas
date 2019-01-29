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
    SaveComponent
  ],
  exports: [
    SaveComponent
  ]
})


export class TestesModule { }
