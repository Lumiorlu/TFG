import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  storageReference=firebase.app().storage().ref();

  constructor() { }
}
