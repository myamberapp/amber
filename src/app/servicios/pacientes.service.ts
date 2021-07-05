import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente } from '../modelos/paciente.model';

@Injectable({
	providedIn: 'root'
})
export class PacientesService {

	constructor(private firestore: AngularFirestore) { }
	getPacientes() {
		return this.firestore.collection('pacientes').snapshotChanges();
	}
	createPaciente(paciente: Paciente) {
		return this.firestore.collection('pacientes').add(paciente);
	}

	validatePaciente(paciente: Paciente) {
		return this.firestore.collection('pacientes', ref => ref.where('usuario', '==', paciente.usuario)).get().toPromise();
	}

	login(user: String, password: String) {
		return this.firestore.collection('pacientes', ref => ref.where('usuario', '==', user).where('contraseña', '==', password)).snapshotChanges();
	}

	eliminar(idPaciente) {
		return this.firestore.collection("pacientes").doc(idPaciente).ref.delete();
	}
}
