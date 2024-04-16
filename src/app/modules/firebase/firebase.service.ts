import { Inject, Injectable } from "@angular/core";
import { IFirebaseConfig } from "./firebase.interface";
import { FirebaseApp, initializeApp } from "firebase/app";
import { FIREBASE_CONFIG_TOKEN } from "./firebase.constant";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Observable, Subscriber } from "rxjs";
import { AppConfigService } from "tt-library-angular-porfolio";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  firebaseApp?: FirebaseApp;

  constructor(
    @Inject(FIREBASE_CONFIG_TOKEN) private config: IFirebaseConfig,
    private appConfigService: AppConfigService,
  ) {
  }

  init() {
    try {
      if (!this.config) {
        const appConfig = this.appConfigService.appConfig;
        if (!appConfig || !appConfig.firebaseConfig) {
          console.error('firebase config is invalid');
        }
        this.firebaseApp = initializeApp(appConfig.firebaseConfig);
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
