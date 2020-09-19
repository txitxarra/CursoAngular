import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroeService: HeroesService,
               private router: Router) {
  console.log('constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this.heroeService.getHeroes();
    console.log(this.heroes);
  }

   verHeroe(indice:number){
    this.router.navigate(['/heroe', indice]);
  }


}
