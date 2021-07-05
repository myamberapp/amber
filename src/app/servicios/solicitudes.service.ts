import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Solicitud } from '../modelos/solicitud.model';

@Injectable({
	providedIn: 'root'
})
export class SolicitudesService {

	constructor(private firestore: AngularFirestore) { }

	getSolicitudes() {
		return this.firestore.collection('solicitudes', ref => ref.where('disponible', '==', true).orderBy('createdAt')).snapshotChanges();
	}

	createSolicitud(solicitud: Solicitud) {
		return this.firestore.collection('solicitudes').add(solicitud);
	}
	getSolicitudesPaciente(user: string) {
		return this.firestore.collection('solicitudes', ref => ref.where('userId', '==', user).orderBy('createdAt', 'desc')).snapshotChanges();
	}

	getSolicitudesTomadas(user: string) {
		return this.firestore.collection('solicitudes', ref => ref.where('tomadaPor', '==', user).orderBy('createdAt', 'asc')).snapshotChanges();
	}

	getSolicitud(mId: string) {
		this.firestore.collection('solicitudes').doc(mId).ref.get().then(function (doc) {
			if (doc.exists) {
				return doc.data();
			} else {
				return null;
			}
		}).catch(function (error) {
			console.log("Error getting document:", error);
		});
	}

	removeSolicitud(id: string) {
		return this.firestore.collection("solicitudes").doc(id).ref.delete().then(() => {

		});
	}

	tomarSolicitud(idSolicitud, idConductor) {
		return this.firestore.collection("solicitudes").doc(idSolicitud).set(
			{ tomadaPor: idConductor, disponible: false }, { merge: true });
	}

	cancelarServicio(idSolicitud) {
		return this.firestore.collection("solicitudes").doc(idSolicitud).set(
			{ tomadaPor: "", disponible: true }, { merge: true });
	}

	completarServicio(idSolicitud) {
		return this.firestore.collection("solicitudes").doc(idSolicitud).set(
			{ completado: true }, { merge: true });
	}

}
