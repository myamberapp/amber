import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Conductor } from '../modelos/conductor.model';

@Injectable({
	providedIn: 'root'
})
export class ConductoresService {

	constructor(private firestore: AngularFirestore) { }
	getConductores() {
		return this.firestore.collection('conductores').snapshotChanges();
	}
	createConductor(conductor: Conductor) {
		return this.firestore.collection('conductores').add(conductor);
	}

	validateConductor(user: String) {
		return this.firestore.collection('conductores', ref => ref.where('usuario', '==', user)).get().toPromise();
	}

	login(user: String, password: String) {
		return this.firestore.collection('conductores', ref => ref.where('usuario', '==', user).where('contraseña', '==', password).where('autorizado', '==', true)).snapshotChanges();
	}

	autorizar(idConductor) {
		return this.firestore.collection("conductores").doc(idConductor).set(
			{ autorizado: true }, { merge: true });
	}

	bloquear(idConductor) {
		return this.firestore.collection("conductores").doc(idConductor).set(
			{ autorizado: false }, { merge: true });
	}

	eliminar(idConductor) {
		return this.firestore.collection("conductores").doc(idConductor).ref.delete();
	}
}
