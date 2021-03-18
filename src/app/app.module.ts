import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaNumerosComponent } from './suma-numeros/suma-numeros.component';
import * as jQuery from 'jquery';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SumaNumerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
