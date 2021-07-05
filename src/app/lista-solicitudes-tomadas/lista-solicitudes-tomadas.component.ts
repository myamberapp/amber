import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../modelos/solicitud.model';
import { SolicitudesService } from '../servicios/solicitudes.service';
import { mStorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-lista-solicitudes-tomadas',
  templateUrl: './lista-solicitudes-tomadas.component.html',
  styleUrls: ['./lista-solicitudes-tomadas.component.css']
})
export class ListaSolicitudesTomadasComponent implements OnInit {

  constructor(private solicitudesService: SolicitudesService, private mStorageService: mStorageService) { }
  solicitudes: Solicitud[] = [];
  ngOnInit() {
    var userId = this.mStorageService.getLocalStorage()[0].userData.id;

    this.solicitudesService.getSolicitudesTomadas(userId).subscribe(data => {
      this.solicitudes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Solicitud;
      });
    });



  }
  cancelarServicio(id) { 
    this.solicitudesService.cancelarServicio(id).then(() => {

    });
  }

  completarServicio(id) {
    this.solicitudesService.completarServicio(id).then(() => {

    });
  }
}
