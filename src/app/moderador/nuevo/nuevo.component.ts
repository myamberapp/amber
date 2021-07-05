import { Component, OnInit } from '@angular/core';
import { Moderador } from 'src/app/modelos/moderador.model';
import { ModeradorService } from 'src/app/servicios/moderador.service';
import { Router } from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private moderadorService: ModeradorService, private router: Router) { }

  ngOnInit() {
    M.AutoInit();


  }

  submit(event) {
    event.preventDefault();
    const moderador: Moderador = {
      nombres: (<HTMLInputElement>document.getElementById("txtNombres")).value,
      apellidos: (<HTMLInputElement>document.getElementById("txtApellidos")).value,
      usuario: (<HTMLInputElement>document.getElementById("txtUsuario")).value,
      contraseña: (<HTMLInputElement>document.getElementById("txtContraseña")).value,
      tipo: "moderador"
    }

    this.create(moderador);
  }

  create(moderador: Moderador) {
    this.moderadorService.validateModerador(moderador).then(ref => {
      if (ref.docs.length == 0) {
        this.moderadorService.createModerador(moderador).then(ref => {
          M.toast({ html: 'Usuario guardado con exito.', classes: 'rounded' });
          this.limpiarCampos();
        });
      }
      else {
        M.toast({ html: 'El usuario ya está en uso.', classes: 'rounded' })
      }
    });
  }

  limpiarCampos() {
    (<HTMLInputElement>document.getElementById("txtNombres")).value = "";
    (<HTMLInputElement>document.getElementById("txtApellidos")).value = "";
    (<HTMLInputElement>document.getElementById("txtUsuario")).value = "";
    (<HTMLInputElement>document.getElementById("txtContraseña")).value = "";
  }


}
