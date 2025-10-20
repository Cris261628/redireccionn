import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaPlanetas } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class PlanetasService {
  private apiUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) {}

  getPlanetas() {
    return this.http.get<RespuestaPlanetas>(this.apiUrl);
  }
}
