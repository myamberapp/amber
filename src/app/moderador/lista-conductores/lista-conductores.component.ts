import { Component, OnInit } from '@angular/core';
import { ConductoresService } from 'src/app/servicios/conductores.service';
import { Conductor } from 'src/app/modelos/conductor.model';

@Component({
  selector: 'app-lista-conductores',
  templateUrl: './lista-conductores.component.html',
  styleUrls: ['./lista-conductores.component.css']
})
export class ListaConductoresComponent implements OnInit {

  constructor(private conductoresService: ConductoresService) { }
  conductores : Conductor [] = [];
  ngOnInit() {
    this.conductoresService.getConductores().subscribe(data => {
      this.conductores = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Conductor;
        
      })
    });
  }

  autorizar(id) {
    this.conductoresService.autorizar(id);
  }

  bloquear(id) {
    this.conductoresService.bloquear(id);
  }

  eliminar(id) {
    if(confirm('¿Está seguro de que desea eliminar el registro?')){
      this.conductoresService.eliminar(id);
    }
  }

}
