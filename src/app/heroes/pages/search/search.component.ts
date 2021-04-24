
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {


  termino = '';
  heroes: Heroe[] = [];

  selectedHeroe: Heroe | undefined;
  constructor(private heroesS: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
   return this.heroesS.getSuggestions(this.termino.trim()).
    subscribe(heroes => this.heroes = heroes);
  }

  selectedOption(event: MatAutocompleteSelectedEvent){
    if (!event.option.value){
      this.selectedHeroe = undefined;
      return;
    }
    const heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesS.getHeroesbyId(heroe.id)
    .subscribe( hero => this.selectedHeroe = hero );

  }

}
