import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', // Nome do componente chamado na HTML
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void { //Chamado na inicialização do componente
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }
}
