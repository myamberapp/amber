import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AgmCoreModule } from '@agm/core';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ListaSolicitudesComponent } from './ambulancias/lista-solicitudes/lista-solicitudes.component';
import { SolicitudesService } from './servicios/solicitudes.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { mStorageService } from './servicios/storage.service';
import { LoginPacientesComponent } from './login-pacientes/login-pacientes.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { LoginModeradorComponent } from './login-moderador/login-moderador.component';
import { UbicacionService } from './servicios/ubicacion.service';
import { MapaComponent } from './mapa/mapa.component';
import { ListaSolicitudesPacienteComponent } from './lista-solicitudes-paciente/lista-solicitudes-paciente.component';
import { ListaSolicitudesTomadasComponent } from './lista-solicitudes-tomadas/lista-solicitudes-tomadas.component';
import { ModeradorComponent } from './moderador/moderador.component';
import { ListaConductoresComponent } from './moderador/lista-conductores/lista-conductores.component';
import { ListaPacientesComponent } from './moderador/lista-pacientes/lista-pacientes.component';
import { NuevoComponent } from './moderador/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    SolicitudComponent,
    ListaSolicitudesComponent,
    LoginPacientesComponent,
    RegistroPacientesComponent,
    LoginModeradorComponent,
    MapaComponent,
    ListaSolicitudesPacienteComponent,
    ListaSolicitudesTomadasComponent,
    ModeradorComponent,
    ListaConductoresComponent,
    ListaPacientesComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5vq2hg_abXkknvDQoVZp5QQN4vONStPU'
    })
  ],
  providers: [
    AngularFirestore,
    mStorageService,
    UbicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
