import { Inject, Injectable, Output, EventEmitter } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Conductor } from '../modelos/conductor.model';


@Injectable({
  providedIn: 'root'
})
export class mStorageService {

  STORAGE_KEY = 'local_session';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(userData: any): void {
    this.removeLocalStorage();
    const currentSession = this.storage.get(this.STORAGE_KEY) || [];

    currentSession.push({
      userData: userData
    });
    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, currentSession);
  }

  public getLocalStorage() {
    return this.storage.get(this.STORAGE_KEY);
  }

  public isLogged() {
    if(this.getLocalStorage() != undefined) {
      return true
    } 
    return false;
  }

  public removeLocalStorage() {
    this.storage.remove(this.STORAGE_KEY);
    return true;
  }
}
