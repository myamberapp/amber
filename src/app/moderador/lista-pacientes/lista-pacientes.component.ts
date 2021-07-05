import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/servicios/pacientes.service';
import { Paciente } from 'src/app/modelos/paciente.model';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  constructor(private pacientesService: PacientesService) { }
  pacientes : Paciente [] = [];
  ngOnInit() {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Paciente;
        
      })
    });
  }

  eliminar(id) {
    if(confirm('¿Está seguro de que desea eliminar el registro?')){
      this.pacientesService.eliminar(id);
    }
  }

}
