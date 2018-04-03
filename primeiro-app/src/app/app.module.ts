import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExibirMensagemComponent } from './exibir-mensagem/exibir-mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibirMensagemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
