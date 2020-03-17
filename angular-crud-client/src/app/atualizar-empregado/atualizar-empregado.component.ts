import { Component, OnInit } from '@angular/core';
import { Empregado } from '../Empregado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoService } from '../empregado.service'

@Component({
  selector: 'app-atualizar-empregado',
  templateUrl: './atualizar-empregado.component.html',
  styleUrls: ['./atualizar-empregado.component.css']
})
export class AtualizarEmpregadoComponent implements OnInit {

  id: number
  empregado: Empregado

  constructor(private route: ActivatedRoute, private router: Router,
    private empregadoService: EmpregadoService) { }

  ngOnInit(): void {

    this.empregado = new Empregado()

    this.id = this.route.snapshot.params['id']

    this.empregadoService.getEmpregado(this.id)
      .subscribe(data => {
        console.log(data)
        this.empregado = data
      }, error => console.log(error))
  }

  atualizarEmpregado() {
    this.empregadoService.atualizarEmpregado(this.id, this.empregado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empregado = new Empregado();
    this.gotoList();
  }

  onSubmit() {
    this.atualizarEmpregado();
  }

  gotoList() {
    this.router.navigate(['/empregados']);
  }

}
