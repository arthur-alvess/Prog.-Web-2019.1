import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdvinhaNúmeroComponent } from './advinha-número/advinha-número.component';


@NgModule({
  declarations: [
    AppComponent,
    AdvinhaNúmeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
