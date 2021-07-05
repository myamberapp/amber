import { Injectable } from '@angular/core';
import { Moderador } from '../modelos/moderador.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  constructor(private firestore: AngularFirestore) { }

  createModerador(moderador: Moderador) {
    return this.firestore.collection('moderadores').add(moderador);
  }

  validateModerador(moderador: Moderador) {
    return this.firestore.collection('moderadores', ref => ref.where('usuario', '==', moderador.usuario)).get().toPromise();
	}

  login(user: String, password: String) {
    return this.firestore.collection('moderadores', ref => ref.where('usuario', '==', user).where('contraseña', '==', password)).snapshotChanges();
  }
}
