import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


   heroes: Heroe[] = [];
   heroe; string;
  constructor(private heroeService: HeroesService,
    private router: Router, private activateRoute: ActivatedRoute) {


     }


  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.heroe = params.heroe;
      console.log(this.heroe);
      this.heroes = this.heroeService.buscarHeroe(this.heroe);
      console.log(this.heroes);
    });
  }

  verHeroe(indice:number){
    this.router.navigate(['/heroe', indice]);
  }




}
