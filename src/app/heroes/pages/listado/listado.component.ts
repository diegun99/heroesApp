import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroesLista : Heroe[] = []



  constructor (
    private heroesService : HeroesService
  ){ }
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(
      {
        next: (data) => {
            this.heroesLista = data;
        },
        error: (error) => {
            alert('There was an error in retrieving data from the server');
        }
    }
    )

  }

}
