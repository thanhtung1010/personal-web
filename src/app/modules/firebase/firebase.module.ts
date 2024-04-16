import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFirebaseConfig } from './firebase.interface';
import { FirebaseService } from './firebase.service';
import { FIREBASE_CONFIG_TOKEN } from './firebase.constant';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FirebaseModule {
  static forRoot(config?: IFirebaseConfig): ModuleWithProviders<FirebaseModule> {
    return {
      ngModule: FirebaseModule,
      providers: [
        {provide: FIREBASE_CONFIG_TOKEN, useValue: config},
        FirebaseService
      ],
    }
  }
}
