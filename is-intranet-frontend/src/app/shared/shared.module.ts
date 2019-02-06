import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { ServerResponseComponent } from './server-response/server-response.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorMsgComponent,
    ServerResponseComponent
  ],
  exports: [ErrorMsgComponent, ServerResponseComponent]
})
export class SharedModule { }
