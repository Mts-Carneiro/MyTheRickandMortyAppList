import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwithModalService {

  constructor() { }

  $modal = new EventEmitter<any>()
}
