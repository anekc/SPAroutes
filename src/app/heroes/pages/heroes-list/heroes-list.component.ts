import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [

  ]
})
export class HeroesListComponent implements OnInit {


  heroes: Heroe[] = [];


  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
    .subscribe( heroe => this.heroes = heroe);


}







}
