import { EmpregadoDetalhesComponent } from './empregado-detalhes/empregado-detalhes.component';
import { CriarEmpregadoComponent } from './criar-empregado/criar-empregado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';
import { AtualizarEmpregadoComponent } from './atualizar-empregado/atualizar-empregado.component';


const routes: Routes = [
  { path: '', redirectTo: 'empregado', pathMatch: 'full' },
  { path: 'empregados', component: EmpregadoListaComponent },
  { path: 'adicionar', component: CriarEmpregadoComponent },
  { path: 'atualizar/:id', component: AtualizarEmpregadoComponent },
  { path: 'detlhes/:id', component: EmpregadoDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
