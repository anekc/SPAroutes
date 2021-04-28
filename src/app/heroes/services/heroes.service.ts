import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
   return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  getHeroesbyId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
  }

  getSuggestions(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}/heroes?q=${termino}&_limit=6`);
  }

  addHeroe(heroe: Heroe): Observable<Heroe>{
  
    return this.http.post<Heroe>(`${this.url}/heroes`, heroe);

  }
}
