import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesPacienteComponent } from './lista-solicitudes-paciente.component';

describe('ListaSolicitudesPacienteComponent', () => {
  let component: ListaSolicitudesPacienteComponent;
  let fixture: ComponentFixture<ListaSolicitudesPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
