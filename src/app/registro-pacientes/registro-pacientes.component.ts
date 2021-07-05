import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../servicios/pacientes.service';
import { mStorageService } from '../servicios/storage.service';
import { Router } from '@angular/router';
import { Paciente } from '../modelos/paciente.model';


declare var M: any;
@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  constructor(private pacientesService: PacientesService, private mStorageService: mStorageService, private router: Router) { }


  ngOnInit() {

    M.AutoInit();

    const logged = this.mStorageService.isLogged();

    if (logged) {
      this.router.navigate(['/solicitud']);
    }
  }

  submit(event) {
    event.preventDefault();
    const paciente: Paciente = {
      documento: Number((<HTMLInputElement>document.getElementById("txtDocumento")).value),
      nombres: (<HTMLInputElement>document.getElementById("txtNombres")).value,
      apellidos: (<HTMLInputElement>document.getElementById("txtApellidos")).value,
      ciudad: (<HTMLInputElement>document.getElementById("txtCiudad")).value,
      usuario: (<HTMLInputElement>document.getElementById("txtUsuario")).value,
      contraseña: (<HTMLInputElement>document.getElementById("txtContraseña")).value,
      tipo: "paciente"
    }

    this.create(paciente);
  }

  create(paciente: Paciente) {
    this.pacientesService.validatePaciente(paciente).then(ref => {
      if (ref.docs.length == 0) {
        this.pacientesService.createPaciente(paciente).then(ref => {
          this.router.navigate(['/login-pacientes']);
          M.toast({ html: 'Usuario guardado con exito.', classes: 'rounded' })
        });
      }
      else {
        M.toast({ html: 'El usuario ya está en uso.', classes: 'rounded' })
      }
    });

  }

}
