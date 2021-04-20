import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width: 100%;
      border-radius: 10pxÑ
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(private route: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {

  this.route.params.pipe(
    switchMap( ({id}) => this.heroesService.getHeroesbyId(id))
  ).subscribe( heroe => this.heroe = heroe );

  }


}
