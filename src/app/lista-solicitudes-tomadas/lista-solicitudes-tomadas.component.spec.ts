import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesTomadasComponent } from './lista-solicitudes-tomadas.component';

describe('ListaSolicitudesTomadasComponent', () => {
  let component: ListaSolicitudesTomadasComponent;
  let fixture: ComponentFixture<ListaSolicitudesTomadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesTomadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesTomadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
