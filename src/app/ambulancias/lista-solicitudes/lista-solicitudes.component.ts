import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/servicios/solicitudes.service';
import { Solicitud } from 'src/app/modelos/solicitud.model';
import { mStorageService } from 'src/app/servicios/storage.service';
import { Conductor } from 'src/app/modelos/conductor.model';
import { Router } from '@angular/router';
import { UbicacionService } from 'src/app/servicios/ubicacion.service';
declare var M: any;
declare var $: any;

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {
  
  

  constructor(private ubicacionService: UbicacionService, private solicitudesService: SolicitudesService, private mStorageService: mStorageService, private router: Router) { }

  solicitudes: Solicitud[] = [];

  
  ngOnInit() {
    $('.tabs').tabs();

    const logged = this.mStorageService.isLogged();
		
		if(!logged){

			this.router.navigate(['/']);
		}
		else {
      var tipoUsuario = this.mStorageService.getLocalStorage()[0].userData.tipo;
			if(tipoUsuario != "ambulancia") {
				this.router.navigate(['/']);
			}
		}
		
    
    this.solicitudesService.getSolicitudes().subscribe(data => {
      this.solicitudes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Solicitud;
        
      })
    });


    
  }

  map(lat, lng) {

    var url = "";
    this.ubicacionService.getPosition().then(pos => {
      url = "mapa/" + pos.lat + "/" + pos.lng + "/" + lat + "/" + lng;
      this.router.navigate([url]);
    });
    
  }

  tomar(s: Solicitud){
    this.solicitudesService.tomarSolicitud(s.id, this.mStorageService.getLocalStorage()[0].userData.id).then((ref) => {

    });
  }

  logout() {
    this.mStorageService.removeLocalStorage();
    this.router.navigate(['']);
  }

}
