import { Component } from '@angular/core';
import { SwithModalService } from './services/swith-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public modalSwith: boolean = false
  
  constructor(private modalSS: SwithModalService){

  }

  ngOnInit(){
    this.modalSS.$modal.subscribe((value) => {this.modalSwith = value})
  }

  public swithModalFunction(){
    this.modalSwith = !this.modalSwith
  }

  title = 'rick-and-morty-app';
}
