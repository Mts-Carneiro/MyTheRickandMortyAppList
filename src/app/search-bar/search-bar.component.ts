import { Component } from '@angular/core';
import { SwithModalService } from '../services/swith-modal.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {

  constructor(private modalSS: SwithModalService){

  }

  openModal(){
    this.modalSS.$modal.emit(true)
    this.getRandomNumber()
  }

  getRandomNumber(){
    Math.floor(Math.random() * 65536);
    console.log( Math.floor(Math.random() * (826) + 1))  
  }
}
