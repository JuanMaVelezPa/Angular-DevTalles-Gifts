import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  cards: string[] = ['Primero', 'Segundo', 'Tercero', 'Cuarto']

  @Input()
  public gifs: Gifs[] = [];

}
