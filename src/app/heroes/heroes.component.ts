import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes', // Nome do componente chamado na HTML
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Superman'
  };

  constructor() { }

  ngOnInit(): void { //Chamado na inicialização do componente
  }

}
