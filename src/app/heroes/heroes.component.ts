import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // Nome do componente chamado na HTML
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void { //Chamado na inicialização do componente
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void { // Define funcao que usada na html
    this.selectedHero = hero;
  }
}
