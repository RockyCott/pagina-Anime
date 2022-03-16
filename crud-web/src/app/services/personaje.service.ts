import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonajeService {
    constructor(private firestore: AngularFirestore) {}

    agregarPersonaje(personaje: any): Promise<any> {
        return this.firestore.collection('personajes').add(personaje);
    }

    getPersonajes(): Observable<any> {
        return this.firestore.collection('personajes', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
    }

    eliminarPersonaje(id: string): Promise<any> {
        return this.firestore.collection('personajes').doc(id).delete();
    }

    getPersonaje(id: string): Observable<any> {
        return this.firestore.collection('personajes').doc(id).snapshotChanges();
    }

    actualizarPersonaje(id: string, data:any): Promise<any>{
        return this.firestore.collection('personajes').doc(id).update(data);
    }
}