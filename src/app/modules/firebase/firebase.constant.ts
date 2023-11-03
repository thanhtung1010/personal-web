import { InjectionToken } from "@angular/core";
import { IFirebaseConfig } from "./firebase.interface";

export const FIREBASE_CONFIG_TOKEN = new InjectionToken<IFirebaseConfig>('firebaseConfig');
