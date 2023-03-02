import { Component } from '@angular/core';
import { Character } from 'src/model/character';
import { CharacterService } from '../services/character.service';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.sass']
})
export class ListDataComponent {
  constructor(
    public characterService: CharacterService
  ){

  }
}


