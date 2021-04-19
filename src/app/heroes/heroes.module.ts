import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeimgPipe } from './pipes/heroeimg.pipe';


@NgModule({
  declarations: [AddComponent, SearchComponent, HeroeComponent, HeroesHomeComponent, HeroesListComponent, HeroeCardComponent, HeroeimgPipe],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroesModule { }
