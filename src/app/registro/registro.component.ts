import { Component, OnInit } from '@angular/core';
import { ConductoresService } from '../servicios/conductores.service';
import { Router } from '@angular/router';
import { Conductor } from '../modelos/conductor.model';
import { mStorageService } from '../servicios/storage.service';
declare var M: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private conductoresService: ConductoresService, private mStorageService: mStorageService, private router: Router) { }


  ngOnInit() {

    M.AutoInit();

    const logged = this.mStorageService.isLogged();
    
    if(logged){
      this.router.navigate(['/lista-solicitudes']);
    }
  }

  submit(event) {
    event.preventDefault();
    const conductor: Conductor = {
      documento : Number((<HTMLInputElement>document.getElementById("txtDocumento")).value),
      licenciaSanitaria : Number((<HTMLInputElement>document.getElementById("txtLicenciaSanitaria")).value),
      nombres : (<HTMLInputElement>document.getElementById("txtNombres")).value,
      apellidos : (<HTMLInputElement>document.getElementById("txtApellidos")).value,
      usuario : (<HTMLInputElement>document.getElementById("txtUsuario")).value,
      contraseña : (<HTMLInputElement>document.getElementById("txtContraseña")).value,
      placa : (<HTMLInputElement>document.getElementById("txtPlaca")).value,
      autorizado: false,
      tipo: "ambulancia"
    }

    this.create(conductor);
  }

  create(conductor: Conductor) {

    this.conductoresService.validateConductor(conductor.usuario).then(ref => {

      if(ref.docs.length == 0) {
        this.conductoresService.createConductor(conductor).then((ref) => {
          this.router.navigate(['/login']);
          M.toast({ html: 'El usuario será validado por un moderador.', classes: 'rounded' })
        });
      }
      else {
        M.toast({html: 'El usuario ya está en uso.', classes: 'rounded'})
      }
    });

    
  }

}
