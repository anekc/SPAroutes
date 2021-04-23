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

  getHeroes(){
   return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  getHeroesbyId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
  }
}
