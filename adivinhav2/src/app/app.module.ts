import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdivinhaNumeroComponent } from './adivinha-numero/adivinha-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinhaNumeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
