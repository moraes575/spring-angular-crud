import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { EmpregadoDetalhesComponent } from './empregado-detalhes/empregado-detalhes.component';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';
import { AtualizarEmpregadoComponent } from './atualizar-empregado/atualizar-empregado.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CriarEmpregadoComponent,
    EmpregadoDetalhesComponent,
    EmpregadoListaComponent,
    AtualizarEmpregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
