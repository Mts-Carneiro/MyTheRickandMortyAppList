import { Component } from '@angular/core';
import { Character } from 'src/model/character';
import { CharacterService } from '../services/character.service';
import { SwithModalService } from '../services/swith-modal.service';


@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.sass'],
  providers: [CharacterService]
})
export class CharacterModalComponent {

  characterById: Character | undefined

  constructor(private modalSS: SwithModalService, public characteService:CharacterService){

  }

  closeModal(){
    this.modalSS.$modal.emit(false)
  }  
}
