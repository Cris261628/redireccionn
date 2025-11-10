import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  DocumentData
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planeta } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class PlanetasService {
  constructor(private firestore: Firestore) {}

  getPlanetas(): Observable<Planeta[]> {
    const ref = collection(this.firestore, 'planetas');
    return from(getDocs(ref)).pipe(
      map(snapshot =>
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Planeta))
      )
    );
  }
}


/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaPlanetas } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class PlanetasService {
  private apiUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) {}

  getPlanetas() {
    return this.http.get<RespuestaPlanetas>(this.apiUrl);
  }
}*/
