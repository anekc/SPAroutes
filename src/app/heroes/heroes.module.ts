import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';



@NgModule({
  declarations: [AddComponent, SearchComponent, HeroeComponent, HeroesHomeComponent, HeroesListComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
