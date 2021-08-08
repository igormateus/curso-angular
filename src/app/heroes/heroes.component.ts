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

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void { //Chamado na inicialização do componente
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void { // Define funcao que usada na html
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
