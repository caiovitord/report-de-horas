import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TestesModule } from './testes/testes.module';
import { EstruturaModule } from './estrutura/estrutura.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    EstruturaModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,

    PagesModule,
    FormsModule,
    TestesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
