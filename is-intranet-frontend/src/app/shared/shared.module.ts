import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { ServerResponseComponent } from './server-response/server-response.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorMsgComponent,
    ServerResponseComponent,
    ModalAlertComponent
  ],
  exports: [ErrorMsgComponent, ServerResponseComponent, ModalAlertComponent]
})
export class SharedModule { }
