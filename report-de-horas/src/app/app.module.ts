import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { TestesModule } from './testes/testes.module';
import { EstruturaModule } from './estrutura/estrutura.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TestesModule,
    EstruturaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
