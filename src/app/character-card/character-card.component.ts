import { Component, Input } from '@angular/core';
import { Character } from 'src/model/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent {
  @Input("character")
  public character: Character | any;
}
