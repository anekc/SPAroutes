import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getHeroes(){
   return this.http.get<Heroe[]>(`${this.url}heroes`);
  }

  getHeroesbyId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}heroes/${id}`);
  }
}
