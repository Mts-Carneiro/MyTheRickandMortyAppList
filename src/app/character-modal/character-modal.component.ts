import { Component } from '@angular/core';
import { SwithModalService } from '../services/swith-modal.service';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.sass']
})
export class CharacterModalComponent {

  constructor(private modalSS: SwithModalService){

  }


  closeModal(){
    this.modalSS.$modal.emit(false)
  }

}
