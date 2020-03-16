import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { EmpregadoDetalhesComponent } from './empregado-detalhes/empregado-detalhes.component';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarEmpregadoComponent,
    EmpregadoDetalhesComponent,
    EmpregadoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
