import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { EndPoints } from './endpoints';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorMsgComponent
  ],
  exports: [ErrorMsgComponent]
})
export class SharedModule { }
