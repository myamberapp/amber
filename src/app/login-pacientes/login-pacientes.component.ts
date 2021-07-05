import { Component, OnInit } from '@angular/core';
import { mStorageService } from '../servicios/storage.service';
import { Router } from '@angular/router';
import { PacientesService } from '../servicios/pacientes.service';
import { Paciente } from '../modelos/paciente.model';
declare var M: any; 
@Component({
  selector: 'app-login-pacientes',
  templateUrl: './login-pacientes.component.html',
  styleUrls: ['./login-pacientes.component.css']
})
export class LoginPacientesComponent implements OnInit {

  constructor(private mStorageService: mStorageService, private router: Router, private pacientesService: PacientesService) { }

  ngOnInit() {
    const logged = this.mStorageService.isLogged();
    
    if(logged){
      this.router.navigate(['/solicitud']);
    }

    
  }

  submit(event) {
    event.preventDefault();
    
      var usuario = (<HTMLInputElement>document.getElementById("txtUsuario")).value;
      var contraseña = (<HTMLInputElement>document.getElementById("txtContraseña")).value;
    
      this.login(usuario, contraseña);
  }
  paciente: Paciente[] = [];
  login(user: String, pass: String) {

    this.pacientesService.login(user,pass).subscribe(data => {
       this.paciente = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Paciente;
      });
      if(this.paciente.length > 0) {
        console.log(this.paciente);
        this.mStorageService.storeOnLocalStorage(this.paciente[0]);
        this.router.navigate(['']);
      }
      else {
        M.toast({html: 'Usuario o contraseña incorrectos.',classes: 'rounded'})
      }
    });
    
  }

}
