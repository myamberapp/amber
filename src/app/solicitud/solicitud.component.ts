import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../modelos/solicitud.model';
import { SolicitudesService } from '../servicios/solicitudes.service';
import { Router } from '@angular/router';
import { mStorageService } from '../servicios/storage.service';
import { Paciente } from '../modelos/paciente.model';
import { UbicacionService } from '../servicios/ubicacion.service';
declare var M: any;
declare var $: any;


@Component({
	selector: 'app-solicitud',
	templateUrl: './solicitud.component.html',
	styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

	constructor(private ubicacionService: UbicacionService, private mStorageService: mStorageService, private solicitudesService: SolicitudesService, private router: Router) { }

	ngOnInit() {
		$('.tabs').tabs();
		const logged = this.mStorageService.isLogged();

		if (!logged) {

			this.router.navigate(['/']);
		}
		else {
			var tipoUsuario = this.mStorageService.getLocalStorage()[0].userData.tipo;
			if (tipoUsuario == "ambulancia") {
				this.router.navigate(['/lista-solicitudes']);
			}
			else if (tipoUsuario == "moderador") {
				this.router.navigate(['/moderador']);
			}
		}


	}

	logout() {
		this.mStorageService.removeLocalStorage();
		this.router.navigate(['']);
	}

	submit(event) {
		event.preventDefault();

		const user: Paciente = {
			nombres: this.mStorageService.getLocalStorage()[0].userData.nombres,
			apellidos: this.mStorageService.getLocalStorage()[0].userData.apellidos,
			ciudad: this.mStorageService.getLocalStorage()[0].userData.ciudad,
			id: this.mStorageService.getLocalStorage()[0].userData.id
		}


		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		var mDate = dd + '-' + mm + '-' + yyyy;



		this.ubicacionService.getPosition().then(pos => {
			const solicitud: Solicitud = {
				nombres: user.nombres,
				apellidos: user.apellidos,
				ciudad: user.ciudad,
				userId: user.id,
				latitud: pos.lat,
				longitud: pos.lng,
				tipoEmergencia: (<HTMLInputElement>document.getElementById("txtTipoEmergencia")).value,
				disponible: true,
				tomadaPor: "",
				completado: false,
				createdAt: new Date()
			};

			this.create(solicitud);
		});


	}

	limpiarCampos() {
		(<HTMLInputElement>document.getElementById("txtTipoEmergencia")).value = "";
	}
	create(solicitud: Solicitud) {
		this.solicitudesService.createSolicitud(solicitud);
		this.limpiarCampos();
		M.toast({ html: 'Su solicitud fue generada con exito, puede consultar su estado en "Mis solicitudes".', classes: 'rounded' })
	}

}
