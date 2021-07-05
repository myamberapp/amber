import { Component, OnInit } from '@angular/core';
import { mStorageService } from '../servicios/storage.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-moderador',
  templateUrl: './moderador.component.html',
  styleUrls: ['./moderador.component.css']
})
export class ModeradorComponent implements OnInit {

  constructor(private mStorageService: mStorageService, private router: Router) { }

  ngOnInit() {
    $('.tabs').tabs();

    const logged = this.mStorageService.isLogged();
		
		if(!logged){

			this.router.navigate(['/']);
		}
		else {
      var tipoUsuario = this.mStorageService.getLocalStorage()[0].userData.tipo;
			if(tipoUsuario != "moderador") {
				this.router.navigate(['/']);
			}
		}
  }

  logout() {
		this.mStorageService.removeLocalStorage();
		this.router.navigate(['']);
	}

}
