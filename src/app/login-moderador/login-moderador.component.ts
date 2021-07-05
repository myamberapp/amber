import { Component, OnInit } from '@angular/core';
import { mStorageService } from '../servicios/storage.service';
import { Router } from '@angular/router';
import { ModeradorService } from '../servicios/moderador.service';
import { Moderador } from '../modelos/moderador.model';
declare var M: any;
@Component({
  selector: 'app-login-moderador',
  templateUrl: './login-moderador.component.html',
  styleUrls: ['./login-moderador.component.css']
})
export class LoginModeradorComponent implements OnInit {

  constructor(private mStorageService: mStorageService, private router: Router, private moderadorService: ModeradorService) { }

  ngOnInit() {

    const logged = this.mStorageService.isLogged();
    
    if(logged){
      this.router.navigate(['/moderador']);
    }
  }

  submit(event) {
    event.preventDefault();
    
      var usuario = (<HTMLInputElement>document.getElementById("txtUsuario")).value;
      var contraseña = (<HTMLInputElement>document.getElementById("txtContraseña")).value;
    
      this.login(usuario, contraseña);
  }
  moderador: Moderador[] = [];
  login(user: String, pass: String) {

    this.moderadorService.login(user,pass).subscribe(data => {
       this.moderador = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Moderador;
      });
      if(this.moderador.length > 0) {
        this.mStorageService.storeOnLocalStorage(this.moderador[0]);
        this.router.navigate(['']);
      }
      else {
        M.toast({html: 'Usuario o contraseña incorrectos.',classes: 'rounded'})
      }
    });
    
  }

}
