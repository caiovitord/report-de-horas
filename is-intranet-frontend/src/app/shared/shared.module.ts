import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { ServerResponseComponent } from './server-response/server-response.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { MoreDataTableComponent } from './modal-alert/more-data-table/more-data-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorMsgComponent,
    ServerResponseComponent,
    ModalAlertComponent,
    MoreDataTableComponent
  ],
  exports: [ErrorMsgComponent, ServerResponseComponent, ModalAlertComponent]
})
export class SharedModule { }
