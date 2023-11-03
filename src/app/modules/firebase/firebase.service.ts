import { Inject, Injectable } from "@angular/core";
import { IFirebaseConfig } from "./firebase.interface";
import { FirebaseApp, initializeApp } from "firebase/app";
import { FIREBASE_CONFIG_TOKEN } from "./firebase.constant";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Observable, Subscriber } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  firebaseApp?: FirebaseApp;

  constructor(@Inject(FIREBASE_CONFIG_TOKEN) private config: IFirebaseConfig) {
  }

  init() {
    try {
      if (!this.config) {
        console.error('firebase config is invalid');
      } else {
        this.firebaseApp = initializeApp(this.config);
      }
    } catch (error) {
      console.error('initnfirebase error: ', error);
    }
  }

  getDowloadURL(path: string): Observable<string> {
    return new Observable<string>((subs: Subscriber<string>) => {
      try {
        const storage = getStorage();
        getDownloadURL(ref(storage, path))
        .then((url) => {
          subs.next(url);
          subs.complete();
        })
        .catch((error) => {
          subs.error(error);
          subs.complete();
        });
      } catch (error) {
        subs.error(error);
        subs.complete();
      }
    });
  }
}
