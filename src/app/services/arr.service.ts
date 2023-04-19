import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrService {
  iconClasses = ['fas fa-ad', 'fas fa-camera-retro', 'fas fa-credit-card', 'fas fa-dice', 'fas fa-envelope-open-text', 'fas fa-gift', 'fas fa-heart', 'fas fa-key', 'fas fa-map-marker-alt', 'fas fa-music'];

  constructor() { }
}
