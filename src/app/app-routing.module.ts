import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ListaSolicitudesComponent } from './ambulancias/lista-solicitudes/lista-solicitudes.component';
import { LoginPacientesComponent } from './login-pacientes/login-pacientes.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { LoginModeradorComponent } from './login-moderador/login-moderador.component';
import { MapaComponent } from './mapa/mapa.component';
import { ModeradorComponent } from './moderador/moderador.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'lista-solicitudes', component: ListaSolicitudesComponent },
  { path: 'login-pacientes', component: LoginPacientesComponent },
  { path: 'registro-pacientes', component: RegistroPacientesComponent },
  { path: 'login-moderador', component: LoginModeradorComponent },
  { path: 'mapa/:mLat/:mLon/:lat/:lon', component: MapaComponent },
  { path: 'moderador', component: ModeradorComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
