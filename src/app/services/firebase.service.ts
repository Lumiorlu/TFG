import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';
import 'firebase/compat/storage';
import { environment } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
