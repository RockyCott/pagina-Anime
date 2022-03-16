import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Configuracion } from "../models/configuracion.mdel";

@Injectable()
export class ConfiguracionService{
    configuracionDoc?: AngularFirestoreDocument<Configuracion | undefined>;
    configuracion?: Observable<Configuracion | undefined>;

    id = '1';

    constructor(
        private db: AngularFirestore
    ){}

    getConfiguracion(): Observable<Configuracion | undefined>{
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges();
        return this.configuracion;
    }

    modificarConfiguracion(configuracion: Configuracion){
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}