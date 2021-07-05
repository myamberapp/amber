import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mStorageService } from '../servicios/storage.service';
import { ConductoresService } from '../servicios/conductores.service';
import { Conductor } from '../modelos/conductor.model';
declare var M: any;

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mStorageService: mStorageService, private router: Router, private conductoresService: ConductoresService) { }

  ngOnInit() {
    const logged = this.mStorageService.isLogged();
    
    if(logged){
      this.router.navigate(['/lista-solicitudes']);
    }

    
  }

  submit(event) {
    event.preventDefault();
    
      var usuario = (<HTMLInputElement>document.getElementById("txtUsuario")).value;
      var contraseña = (<HTMLInputElement>document.getElementById("txtContraseña")).value;
    
      this.login(usuario, contraseña);
  }
  conductor: Conductor[] = [];
  login(user: String, pass: String) {
    
    this.conductoresService.login(user,pass).subscribe(data => {
       this.conductor = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Conductor;
      });
      if(this.conductor.length > 0) {
        this.mStorageService.storeOnLocalStorage(this.conductor[0]);
        this.router.navigate(['']);
      }
      else {
        M.toast({html: 'Es posible que el usuario o la contraseña sean incorrectos o que este pendiente de verificación.',classes: 'rounded'})
      }
    });
    
  }
}
