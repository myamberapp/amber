import { Component, OnInit } from '@angular/core';
import { mStorageService } from '../servicios/storage.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private mStorageService: mStorageService, private router: Router) { }

  ngOnInit() {
    $('.tabs').tabs();
    const logged = this.mStorageService.isLogged();
    
    if(logged){

			var tipoUsuario = this.mStorageService.getLocalStorage()[0].userData.tipo;
			if(tipoUsuario == "ambulancia") {
				this.router.navigate(['/lista-solicitudes']);
			}
			else if(tipoUsuario == "moderador")  {
				this.router.navigate(['/moderador']);
      }
      else if(tipoUsuario = "paciente") {
        this.router.navigate(['/solicitud']);
      }
		}
  }

}
