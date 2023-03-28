import { Component } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { SwithModalService } from '../services/swith-modal.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  providers: [CharacterService]
})
export class SearchBarComponent {



  constructor(private modalSS: SwithModalService, public characteService:CharacterService){}


  openModal() {
    this.modalSS.$modal.emit(true);
    this.characteService.getCharacterById()
  }



}
