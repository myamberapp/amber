import { Component, OnInit } from '@angular/core';
import { mStorageService } from '../servicios/storage.service';
import { Router } from '@angular/router';
import { SolicitudesService } from '../servicios/solicitudes.service';
import { Solicitud } from '../modelos/solicitud.model';

@Component({
  selector: 'app-lista-solicitudes-paciente',
  templateUrl: './lista-solicitudes-paciente.component.html',
  styleUrls: ['./lista-solicitudes-paciente.component.css']
})
export class ListaSolicitudesPacienteComponent implements OnInit {

  constructor(private solicitudesService: SolicitudesService, private mStorageService: mStorageService, private router: Router) { }

  solicitudes: Solicitud[] = [];

  ngOnInit() {

    
    var usuario = this.mStorageService.getLocalStorage()[0].userData.id;

    this.solicitudesService.getSolicitudesPaciente(usuario).subscribe(data => {
      this.solicitudes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Solicitud;
      });
      console.log(this.solicitudes)
    });

  }

  removeSolicitud(id){
    if(confirm("¿Está seguro de que desea cancelar la solicitud?")) {
      this.solicitudesService.removeSolicitud(id);
    }
    
  }

}
