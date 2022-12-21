import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Encounter } from '../../../data/Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  private apiUrl = 'http://localhost:3000/encounters';

  constructor( private http:HttpClient ) { }

  getEncounters(): Observable<Encounter[]> {
    return this.http.get<Encounter[]>(this.apiUrl);
  }
};
