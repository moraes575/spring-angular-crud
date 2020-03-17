import { EmpregadoService } from '../empregado.service';
import { Empregado } from '../Empregado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-empregado',
  templateUrl: './criar-empregado.component.html',
  styleUrls: ['./criar-empregado.component.css']
})
export class CriarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado()
  submitted = false;

  constructor(private empregadoService: EmpregadoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  novoEmpregado(): void {
    this.submitted = false
    this.empregado = new Empregado()
  }

  salvar() {
    this.empregadoService.criarEmpregado(this.empregado)
      .subscribe(data => console.log(data), error => console.log(error))
    this.empregado = new Empregado()
    this.goToList()
  }

  onSubmit() {
    this.submitted = true
    this.salvar()
  }

  goToList() {
    this.router.navigate(['/empregados'])
  }
}
