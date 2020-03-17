import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEmpregadoComponent } from './atualizar-empregado.component';

describe('AtualizarEmpregadoComponent', () => {
  let component: AtualizarEmpregadoComponent;
  let fixture: ComponentFixture<AtualizarEmpregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarEmpregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
